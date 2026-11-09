/**
 * Follow camera (third person, with wall clearance), first person, the
 * WASTED death pull-back, the title-screen fly-by and the drunk sway.
 */
export function createCameraRig(game) {
  const {T, camera, state, rom, collision, interior} = game;
  const UP = T.Object3D.DEFAULT_UP;
  const target = new T.Vector3(), wanted = new T.Vector3(), direction = new T.Vector3();
  const aimVector = new T.Vector3(), aimPoint = new T.Vector3(), ray = new T.Ray();
  const position = rom.player.position;

  const ceiling = () => (interior.floorAt(position.x).baseY ?? 0) + 3.35;

  function update(now, indoors) {
    aimVector.set(0, -Math.sin(state.pitch), -Math.cos(state.pitch)).applyAxisAngle(UP, state.yaw);
    aimPoint.copy(position); aimPoint.y += 1.66;
    if (state.firstPerson) {
      camera.position.copy(aimPoint);
      camera.lookAt(wanted.copy(aimPoint).add(aimVector));
    } else {
      target.copy(position).add(direction.set(0, 1.40, 0));
      const angle = T.MathUtils.clamp(.33 + state.pitch * .28, .05, .65);
      direction.set(0, Math.sin(angle), Math.cos(angle)).applyAxisAngle(UP, state.yaw).normalize();
      ray.set(target, direction);
      const distance = collision.cameraDistance(ray, target, indoors ? 3.4 : camera.aspect < .65 ? 7.2 : 5.9, indoors, position.x);
      camera.position.copy(wanted.copy(target).addScaledVector(direction, distance));
      if (indoors) camera.position.y = Math.min(camera.position.y, ceiling());
      camera.lookAt(wanted.copy(target).addScaledVector(aimVector, 3));
    }
    if (state.timers.dizzy) camera.rotateZ(Math.sin(now * .005) * .095 * Math.min(1, state.timers.dizzy / 3));
  }

  function updateDeath() {
    const progress = Math.min(1, state.deathTime / 2.6);
    rom.rig.rotation.x = -Math.min(1, progress * 5) * 1.48;
    target.copy(position).add(direction.set(0, .55, 0));
    direction.set(0, .27 + progress * .42, 1).applyAxisAngle(UP, state.yaw).normalize();
    ray.set(target, direction);
    const indoors = collision.inside(position.x, position.z, position.y);
    const distance = collision.cameraDistance(ray, target, (indoors ? 2 : 4) + progress * (indoors ? 2 : 7), indoors, position.x);
    camera.position.copy(target).addScaledVector(direction, distance);
    if (indoors) camera.position.y = Math.min(camera.position.y, ceiling());
    camera.lookAt(target);
  }

  function updateMenu(now) {
    camera.position.set(-31 + Math.sin(now * .00016) * 3, 7.2, 36);
    camera.lookAt(0, 4, -13);
  }

  /** Screen position (percent) of the ranged-weapon aim point 16 m ahead. */
  function aimScreenPoint() {
    camera.updateMatrixWorld();
    wanted.copy(aimPoint).addScaledVector(aimVector, 16).project(camera);
    return {x:T.MathUtils.clamp((wanted.x + 1) * 50, 2, 98), y:T.MathUtils.clamp((1 - wanted.y) * 50, 2, 98)};
  }

  const projected = new T.Vector3(), cameraSpace = new T.Vector3();
  /** Screen position of a world point for the waypoint marker, clamped to the screen edge. */
  function screenPoint(point) {
    camera.updateMatrixWorld();
    projected.set(point.x, point.y, point.z);
    cameraSpace.copy(projected).applyMatrix4(camera.matrixWorldInverse);
    projected.project(camera);
    let x = projected.x, y = projected.y;
    const behind = cameraSpace.z > 0;
    if (behind) { x = -x; y = -y; }
    const offscreen = behind || Math.abs(x) > .92 || Math.abs(y) > .88;
    if (offscreen) {
      const scale = 1 / Math.max(Math.abs(x) / .92, Math.abs(y) / .88, 1e-6);
      x *= scale; y *= scale;
      if (behind && Math.abs(y) < .88) y = -.88; // Behind you: pin to the bottom edge.
    }
    return {x:(x + 1) * 50, y:(1 - y) * 50, edge:offscreen};
  }

  return {
    update, updateDeath, updateMenu, aimScreenPoint, screenPoint,
    toggleView() {
      state.firstPerson = !state.firstPerson;
      rom.rig.visible = !state.firstPerson;
      game.notice(state.firstPerson ? 'Pirmojo asmens vaizdas' : 'Trečiojo asmens vaizdas');
    },
  };
}
