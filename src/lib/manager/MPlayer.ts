import type { GameObj } from "kaboom";
import movePlayer from "./movePlayer";
import colisionPlayer from "./colisionPlayer";
import uiItems from "./items";

export default function managerPlayer(k: any, player: any, inventario:number[]) {
    // 0 = key, coin= 1
    let curretAnim = "idle";

    return () => {
        const uiItemsList:any[] = uiItems(k,inventario);
        console.log(uiItemsList);
        player.play("idle");
        movePlayer(k,player,curretAnim);
        colisionPlayer(k,player,uiItemsList,inventario);

        player.onUpdate(() => {
            k.camPos(player.worldPos());
        });

        player.onPhysicsResolve(() => {
            k.camPos(player.worldPos());
        });


    };
}
