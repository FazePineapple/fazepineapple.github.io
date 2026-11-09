# The Legend of Rom

A local browser game in which Rom, a student at Nemenčinės Gedimino gimnazija, explores the school grounds. The demo uses Three.js and a third-person camera. Open ../rom-demo/dist/index.html in a browser with WebGL.

## Work on the game

- rom-demo/game.js builds the campus, renders Rom and the pickups, and handles input, movement, the camera, collision, and the HUD.
- rom-demo/inventory.js defines the items and manages the 36 slots. The first nine slots are the hotbar. Identical items stack up to 64.
- rom-demo/dist/index.html and style.css define the menu, HUD, and inventory. The browser loads game.bundle.js directly so the demo works from disk.
- From rom-demo, rebuild after JavaScript changes:

  ```powershell
  npx --yes esbuild game.js --bundle --minify --loader:.jpg=dataurl --legal-comments=none --outfile=dist/game.bundle.js
  node --check dist/game.bundle.js
  ```

## Play and verify

Start the game, use WASD to walk, click the scene to look with the mouse, use Shift to sprint and Space to jump. R resets Rom's position and vitals. Esc opens the menu.

Walk forward from spawn to the juice pack. Use E to pick it up, select slots with 1–9, and press Q to throw one item from the selected stack. A thrown item bounces, settles, and becomes available for pickup. Press I to open the inventory. Select a stack and then a destination to move, swap, or merge it. The backpack also provides a Throw one button. Sprinting and jumping spend stamina, and hard landings reduce health.

The browser smoke test covered startup, movement, pickup, moving an item into the backpack, throwing it, and stamina use.

## Campus and source material

- User-supplied aerial screenshot guides the footprint. The user-supplied street-level screenshot guides the courtyard, brick wings, gray entrances, railings, and scattered letters. The side and rear details are approximate.
- The [municipal entrance photos](https://vrsa.lt/gyventojams/naujienos/40/europos-kokybes-zenklelis-nemencines-gedimino-gimnazijai%3A8189) informed the school lettering, motto, and statue. The game generates its surfaces and normal maps in code.
- rom-demo/dist/rom.jpg is the selected full-body photo from the Romo fotkės archive. The game uses it in the menu and samples the face for the stylized model. The bundle embeds the same photo for offline rendering. Review both files before sharing the repository beyond the project.
- The original Game archives, Rom photo archive, and intro video are source references. Keep the large originals out of Git.

## Extension points

Use E at the green marker outside the right-hand entrance to enter, and E beneath IŠĖJIMAS to return to the courtyard. rom-demo/interior.js defines the interior geometry and wall collision layout. The [school foyer report](https://gediminogimnazija.lt/lt/naujienos/aktualijos/2025/12/neformalaus-ugdymo-diena-sviesos-kelione-nemencines-gedimino-gimnazijoje) and [school assembly hall photos](https://gediminogimnazija.lt/lt/naujienos/projektine-veikla/2025/10/ilgalaikiu-muzikos-sokio-kino-teatro-krypciu-kulturiniu-edukaciniu-programu-igyvendinimas-mokykloje-ir-uz-mokyklos-ribu) informed the decor. The floor plan is fictional.

Press F to consume one item from the selected hotbar stack, or use the Eat or Drink button in the inventory. Item definitions list immediate stamina restoration and timed effects. Juice causes repeated restroom urges, the bun restores stamina and causes gas during sprints, and beer sways the camera. Reusing an item refreshes its timer.

Keep walkable heights in groundAt aligned with the visible steps, ramp, and hills. Building footprints drive collision, camera clearance, and the minimap.
