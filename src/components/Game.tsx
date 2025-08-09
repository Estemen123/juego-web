"use client";
import { useEffect } from "react";
import menuScene from "./scenes/menu";
import gameScene from "./scenes/game";
import k from "@/lib/kaboomConfig";

export default function Game() {
    useEffect(() => {
        async function startGame() {
            const kaboom = (await import("kaboom")).default;

            const k = kaboom({
                global: true,
                width: 1000,
                height: 500,
                background: [0, 0, 0, 1],
            });

            k.scene("game", gameScene(k));
            k.scene("menu", menuScene(k));
            k.debug.inspect = true;
            k.go("menu");
        }
        
        startGame();
    }, []);

    return null;
}
