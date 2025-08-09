export default function gameScene(k: any) {
    k.loadSprite("player", "/sprites/p1.png");

    return () => {
       const player = k.add([
        k.sprite("player"),
        k.pos(100, 100),
        k.area(),
        k.body(),
        k.anchor("center"),
        k.scale(0.2),
      ]);

      // Controles básicos
      k.onKeyDown("left", () => {
        player.move(-120, 0);
      });
      k.onKeyDown("right", () => {
        player.move(120, 0);
      });;

    };
}
