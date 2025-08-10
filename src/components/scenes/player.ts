import managerPlayer from "@/lib/manager/MPlayer";
import { Dispatch, SetStateAction } from "react";

export default function player(k: any,score1:number,) {
    console.log(score1);
    k.loadSprite("player", "/sprites/this.png", {
        sliceX: 4,
        sliceY: 4,
        anims: {
            idle: { from: 0, to: 3, speed: 4, loop: true },
            run: { from: 4, to: 7, speed: 3, loop: true },
        },
    });

    return () => {
        const score = k.add([k.text("Score: " + score1), k.pos(24, 24), { value: score1 }]);
        const player = k.add([
            k.sprite("player"),
            k.pos(200, 200),
            k.area(),
            k.body(),
            k.anchor("center"),
            k.scale(0.2,0.2),
        ]);
        const mp = managerPlayer(k, player,score,score1);
        mp();
    };
}
