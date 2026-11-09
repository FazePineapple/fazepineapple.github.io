/**
 * Static geometry batching.
 *
 * The campus is modelled from thousands of small boxes (bricks walls, window
 * frames, steps, railings, furniture). Drawn one by one that is several
 * thousand draw calls per frame, twice over for the shadow pass. This merges
 * every static mesh under `root` into one mesh per material and shadow
 * setting, which keeps the scene identical while cutting draw calls by ~97%.
 *
 * Anything that moves, animates its transform or toggles its own visibility
 * must be listed in `keep` (it and its descendants are left untouched).
 */
export function mergeStaticMeshes(T, root, keep = []) {
  root.updateMatrixWorld(true);
  const kept = new Set();
  for (const object of keep) object.traverse(child => kept.add(child));
  const toRoot = new T.Matrix4().copy(root.matrixWorld).invert();
  const buckets = new Map();
  const merged = [];

  root.traverse(object => {
    if (!object.isMesh || object.isInstancedMesh || object.isSkinnedMesh || kept.has(object)) return;
    if (!object.visible || !hasAttributes(object.geometry)) return;
    const matrix = new T.Matrix4().multiplyMatrices(toRoot, object.matrixWorld);
    const materials = Array.isArray(object.material) ? object.material : [object.material];
    const groups = Array.isArray(object.material) && object.geometry.groups.length
      ? object.geometry.groups
      : [{start:0, count:Infinity, materialIndex:0}];
    for (const group of groups) {
      const material = materials[group.materialIndex];
      if (!material) continue;
      const key = material.uuid + (object.castShadow ? 'c' : '') + (object.receiveShadow ? 'r' : '');
      if (!buckets.has(key)) buckets.set(key, {material, castShadow:object.castShadow, receiveShadow:object.receiveShadow, parts:[]});
      buckets.get(key).parts.push({geometry:object.geometry, matrix, start:group.start, count:group.count});
    }
    merged.push(object);
  });

  for (const object of merged) object.removeFromParent();
  pruneEmptyGroups(root);
  for (const {material, castShadow, receiveShadow, parts} of buckets.values()) {
    const batch = new T.Mesh(combine(T, parts), material);
    batch.castShadow = castShadow;
    batch.receiveShadow = receiveShadow;
    batch.matrixAutoUpdate = false;
    root.add(batch);
  }
  return {merged:merged.length, batches:buckets.size};
}

function hasAttributes(geometry) {
  const {position, normal, uv} = geometry.attributes;
  return position && normal && uv && position.itemSize === 3;
}

function pruneEmptyGroups(root) {
  for (const child of [...root.children]) {
    pruneEmptyGroups(child);
    if (child.isGroup && !child.children.length) child.removeFromParent();
  }
}

function combine(T, parts) {
  let vertexTotal = 0, indexTotal = 0;
  const ranges = parts.map(part => {
    const {geometry} = part;
    const index = geometry.index;
    const available = index ? index.count : geometry.attributes.position.count;
    const start = Math.min(part.start, available);
    const count = Math.min(part.count, available - start);
    const range = {start, count, vertexOffset:vertexTotal};
    vertexTotal += geometry.attributes.position.count;
    indexTotal += count;
    return range;
  });

  const positions = new Float32Array(vertexTotal * 3);
  const normals = new Float32Array(vertexTotal * 3);
  const uvs = new Float32Array(vertexTotal * 2);
  const indices = vertexTotal > 65535 ? new Uint32Array(indexTotal) : new Uint16Array(indexTotal);
  const point = new T.Vector3(), normalMatrix = new T.Matrix3();
  let indexCursor = 0;

  parts.forEach((part, i) => {
    const {geometry, matrix} = part;
    const {position, normal, uv} = geometry.attributes;
    const {start, count, vertexOffset} = ranges[i];
    normalMatrix.getNormalMatrix(matrix);
    const flipped = matrix.determinant() < 0;
    for (let v = 0; v < position.count; v++) {
      point.fromBufferAttribute(position, v).applyMatrix4(matrix);
      point.toArray(positions, (vertexOffset + v) * 3);
      point.fromBufferAttribute(normal, v).applyMatrix3(normalMatrix).normalize();
      point.toArray(normals, (vertexOffset + v) * 3);
      uvs[(vertexOffset + v) * 2] = uv.getX(v);
      uvs[(vertexOffset + v) * 2 + 1] = uv.getY(v);
    }
    const index = geometry.index;
    for (let k = 0; k < count; k += 3) {
      const a = index ? index.getX(start + k) : start + k;
      const b = index ? index.getX(start + k + 1) : start + k + 1;
      const c = index ? index.getX(start + k + 2) : start + k + 2;
      indices[indexCursor++] = vertexOffset + a;
      indices[indexCursor++] = vertexOffset + (flipped ? c : b);
      indices[indexCursor++] = vertexOffset + (flipped ? b : c);
    }
  });

  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new T.BufferAttribute(normals, 3));
  geometry.setAttribute('uv', new T.BufferAttribute(uvs, 2));
  geometry.setIndex(new T.BufferAttribute(indices, 1));
  geometry.computeBoundingSphere();
  geometry.computeBoundingBox();
  return geometry;
}
