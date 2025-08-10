import type { GameObj } from "kaboom";
import movePlayer from "./movePlayer";
import colisionPlayer from "./colisionPlayer";
import { Dispatch, SetStateAction } from "react";

export default function managerPlayer(k: any, player: any, score:any,score1:number) {
    
    let curretAnim = "idle";

    return () => {
        player.play("idle");
        movePlayer(k,player,curretAnim);
        colisionPlayer(k,player,score,score1);

        player.onUpdate(() => {
            k.camPos(player.worldPos());
        });

        player.onPhysicsResolve(() => {
            k.camPos(player.worldPos());
        });


    };
}
