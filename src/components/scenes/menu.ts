export default function gameScene(k: any) {
  return () => {
    k.add([
      k.text("¡Juego Iniciado!"),
      k.pos(100, 100),
    ]);
  };
}
