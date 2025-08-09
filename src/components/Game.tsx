"use client";
import { useEffect } from "react";
import menuScene from "./scenes/menu";
import gameScene from "./scenes/game";

export default function Game() {
    useEffect(() => {
        async function startGame() {
            const kaboom = (await import("kaboom")).default;

            const k = kaboom({
                width: 1280,
                height: 780,
                background: [0, 0, 0],
            });

            k.loadSprite("player", "/sprites/p1.png");
            
            k.scene("game", gameScene(k));
            k.scene("menu", menuScene(k));

            k
            k.go("menu");
        }

        startGame();
    }, []);

    return null;
}
