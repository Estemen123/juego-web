const level0 = (k: any) => {
    k.loadSprite("grass", "/sprites/grass.png");
    k.loadSprite("wall", "/sprites/wall.png");

    const level = [
        "wwwwwwwwww",
        "w........w",
        "w...p....w",
        "w........w",
        "wwwwwwwwww...wwwww....",
    ];

    const levelConfig = {
        tileWidth: 2,
        tileHeight: 2,
        tiles: {
            w: () => [k.sprite("wall"), k.area(), k.body({ isStatic: true })],
            ".": () => [k.sprite("grass")],
        },
    };

    return () => {
        k.addLevel(level, levelConfig);
        // Agrega jugador, objetos, enemigos etc.
    };
};
export default level0;
