"use client";
import { useEffect } from "react";
import menuScene from "./scenes/menu";
import gameScene from "./scenes/game";

export default function Game() {
  useEffect(() => {
    async function startGame() {
      // Importar kaboom solo en el cliente
      const kaboom = (await import("kaboom")).default;

      const k = kaboom({
        width: 640,
        height: 480,
        background: [0, 0, 0],
      });

      k.scene("menu", menuScene(k));
      k.scene("game", gameScene(k));
      k.go("menu");
    }

    startGame();
  }, []);

  return null;
}
