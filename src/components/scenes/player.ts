import managerPlayer from "@/lib/manager/MPlayer";

export default function player(k: any) {
    k.loadSprite("player", "/sprites/this.png", {
        sliceX: 4,
        sliceY: 4,
        anims: {
            idle: { from: 0, to: 3, speed: 4, loop: true },
            run: { from: 4, to: 7, speed: 3, loop: true },
        },
    });

    return () => {
        const player = k.add([
            k.sprite("player"),
            k.pos(100, 100),
            k.area(),
            k.body(),
            k.anchor("center"),
            k.scale(0.2,0.2),
        ]);
        const mp = managerPlayer(k, player);
        mp();
    };
}
