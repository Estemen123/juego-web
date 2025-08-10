import level0 from "./levels/level0";
import player from "./player";

export default function gameScene(k: any, levelIndex: number) {
    return () => {
        const scena = level0(k, levelIndex);
        scena();
        const score = k.add([k.text("Score: 0"), k.pos(24, 24), { value: 0 }]);
        const createPlayer = player(k, score);
        createPlayer();
        
    };
}
