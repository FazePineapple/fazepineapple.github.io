/**
 * Low-level mesh, material and texture helpers shared by every world builder.
 * Solid colours share one material per colour, and `shared()` caches
 * geometries so models built repeatedly (held items, pickups) do not leak GPU
 * buffers.
 */
export function createBuilders(T, scene, renderer, random) {
  const palette = new Map();
  const mat = color => {
    if (!palette.has(color)) palette.set(color, new T.MeshLambertMaterial({color}));
    return palette.get(color);
  };
  const geometries = new Map();
  const shared = (key, create) => {
    if (!geometries.has(key)) geometries.set(key, create());
    return geometries.get(key);
  };
  const cube = new T.BoxGeometry(1, 1, 1);
  const ellipsoid = new T.SphereGeometry(1, 16, 12);
  const anisotropy = renderer.capabilities.getMaxAnisotropy();

  function mesh(geometry, color, x, y, z, parent = scene) {
    const object = new T.Mesh(geometry, typeof color === 'number' ? mat(color) : color);
    object.position.set(x, y, z);
    object.castShadow = true;
    object.receiveShadow = true;
    parent.add(object);
    return object;
  }
  function box(x, y, z, w, h, d, color, parent) {
    const object = mesh(cube, color, x, y, z, parent);
    object.scale.set(w, h, d);
    return object;
  }
  function oval(parent, color, x, y, z, w, h, d) {
    const part = mesh(ellipsoid, color, x, y, z, parent);
    part.scale.set(w, h, d);
    return part;
  }
  function texture(size, draw, repeats = 1) {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    draw(canvas.getContext('2d'));
    const map = new T.CanvasTexture(canvas);
    map.colorSpace = T.SRGBColorSpace;
    map.wrapS = map.wrapT = T.RepeatWrapping;
    map.repeat.set(repeats, repeats);
    map.anisotropy = anisotropy;
    return map;
  }
  function normalMap(colorMap, strength, heightMap = colorMap) {
    const source = heightMap.image;
    const size = source.width;
    const pixels = source.getContext('2d').getImageData(0, 0, size, size).data;
    const sample = (x, y) => pixels[((y + size) % size * size + (x + size) % size) * 4] / 255;
    const normal = texture(size, c => {
      const output = c.createImageData(size, size);
      for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
        const dx = (sample(x - 1, y) - sample(x + 1, y)) * strength;
        const dy = (sample(x, y + 1) - sample(x, y - 1)) * strength;
        const length = Math.hypot(dx, dy, 1);
        output.data.set([128 + 127 * dx / length, 128 + 127 * dy / length, 128 + 127 / length, 255], (y * size + x) * 4);
      }
      c.putImageData(output, 0, 0);
    });
    normal.colorSpace = T.NoColorSpace;
    normal.repeat.copy(colorMap.repeat);
    return normal;
  }
  function surface(base, flecks, repeats, paving = false) {
    const map = texture(128, c => {
      c.fillStyle = base; c.fillRect(0, 0, 128, 128);
      for (let i = 0; i < 2200; i++) {
        c.fillStyle = flecks[i % flecks.length];
        c.fillRect(random() * 128, random() * 128, 1 + random() * 4, 1 + random() * 3);
      }
      if (paving) {
        c.fillStyle = '#848477';
        for (let i = 0; i < 128; i += 32) { c.fillRect(0, i, 128, 1); c.fillRect(i, 0, 1, 128); }
      }
    }, repeats);
    const height = texture(128, c => {
      c.fillStyle = '#969696'; c.fillRect(0, 0, 128, 128);
      for (let i = 0; i < 1400; i++) {
        const shade = 100 + random() * 90;
        c.fillStyle = 'rgb(' + shade + ' ' + shade + ' ' + shade + ')';
        c.fillRect(random() * 128, random() * 128, 1 + random() * 3, 1 + random() * 2);
      }
      if (paving) {
        c.fillStyle = '#626262';
        for (let i = 0; i < 128; i += 32) { c.fillRect(i, 0, 2, 128); c.fillRect(0, i, 128, 2); }
      }
    });
    const normal = normalMap(map, paving ? 2.8 : 1.2, height);
    height.dispose();
    return new T.MeshLambertMaterial({map, normalMap:normal});
  }

  return {T, scene, random, mat, shared, mesh, box, oval, texture, normalMap, surface};
}
