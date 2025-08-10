import { Dispatch, SetStateAction } from "react";
import level0 from "./levels/level0";
import player from "./player";

export default function gameScene(k: any, levelIndex: number,inventario:number[]) {
    return () => {
        const scena = level0(k, levelIndex);
        scena();
        
        const createPlayer = player(k,inventario);
        createPlayer();
        
    };
}
