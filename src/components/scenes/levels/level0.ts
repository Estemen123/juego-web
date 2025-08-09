const level0 = (k: any, nevelIndex:number) => {
    k.loadSprite("grass", "/sprites/grass.png");
    k.loadSprite("wall", "/sprites/wall.png");
    k.loadSprite("coin", "/sprites/coin.png");
    k.loadSprite("pic", "/sprites/pic.png");

    const level = [[
        "wwwwwwwwwwwwwwwwwwwwwwwwwwww",
        "w...f.........@............w",
        "w..........................w",
        "w....wwww........www.......w",
        "w..........................w",
        "w...@...........@..........w",
        "w..........................w",
        "w......wwwwww..............w",
        "w..........................w",
        "w....@..............@......w",
        "w..........................w",
        "w..............ww..........w",
        "w..........................w",
        "w..........................w",
        "w....@...............@.....w",
        "w..........................w",
        "w..................p.......w",
        "w..........................w",
        "wwwwwwwwwwwwwwwwwwwwwwwwwwww",],
        [
        "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
        "w........................................w",
        "w.............@................@..........w",
        "w........................................w",
        "w....wwwwwwww.................wwwwwwwww..w",
        "w........................................w",
        "w........................................w",
        "w........@....................@...........w",
        "w........................................w",
        "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
    ]
    ];

    const levelConfig = {
        tileWidth: 80,
        tileHeight: 80,
        tiles: {
            f: ()=> [k.sprite("pic"),k.area(),k.scale(0.1),"pjt0"],
            w: () => [k.sprite("wall"), k.area(), k.body({ isStatic: true })],
            ".": () => [k.sprite("grass")],
            "@": () => [k.sprite("coin"), k.area(), k.scale(0.2), "coin"],
            p: () => [k.sprite("pic"), k.area(), k.scale(0.1),"pic"],
        },
    };

    return () => {
        k.addLevel(level[nevelIndex|0], levelConfig);
        // Agrega jugador, objetos, enemigos etc.
    };
};
export default level0;
