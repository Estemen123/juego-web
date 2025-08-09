export default function menuScene(k: any) {
  return () => {
    k.add([
      k.text("Menú Principal - Presiona SPACE para jugar"),
      k.pos(50, 100),
    ]);

    k.onKeyPress("space", () => {
      k.go("game");
    });
  };
}
