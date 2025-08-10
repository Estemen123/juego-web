import type { GameObj } from "kaboom";
import movePlayer from "./movePlayer";
import colisionPlayer from "./colisionPlayer";

export default function managerPlayer(k: any, player: any, score:any) {
    
    let curretAnim = "idle";

    return () => {
        player.play("idle");
        movePlayer(k,player,curretAnim);
        colisionPlayer(k,player,score);

        player.onUpdate(() => {
            k.camPos(player.worldPos());
        });

        player.onPhysicsResolve(() => {
            k.camPos(player.worldPos());
        });


    };
}
