"use client";
import { useEffect, useState } from "react";
import menuScene from "./scenes/menu";
import gameScene from "./scenes/game";

export default function Game() {

    useEffect(() => {
        async function startGame() {
            const kaboom = (await import("kaboom")).default;

            const k = kaboom({
                global: true,
                width: 1500,
                height: 700,
                background: [0, 0, 0, 1],
            });

            k.scene("game", (levelIndex: number,score:number) =>
                gameScene(k, levelIndex, score)()
            );
            k.scene("menu", menuScene(k));
            //k.debug.inspect = true;
            k.go("menu");
        }

        startGame();
    }, []);

    return null;
}
