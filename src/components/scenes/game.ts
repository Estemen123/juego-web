import level0 from "./levels/level0";
import player from "./player";

export default function gameScene(k: any) {

    return () => {
        const scena =level0(k);
        scena();
        const createPlayer = player(k); 
        createPlayer(); 
    };
}
