import { Dispatch, SetStateAction } from "react";
import level0 from "./levels/level0";
import player from "./player";

export default function gameScene(k: any, levelIndex: number,score1:number) {
    return () => {
        const scena = level0(k, levelIndex);
        scena();
        
        const createPlayer = player(k,score1);
        createPlayer();
        
    };
}
