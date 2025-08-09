const level0 = (k: any, nevelIndex:number) => {
    k.loadSprite("grass", "/sprites/grass.png");
    k.loadSprite("wall", "/sprites/wall.png");
    k.loadSprite("coin", "/sprites/coin.png");
    k.loadSprite("pic", "/sprites/pic.png");
    k.loadSprite("c","/sprites/cesped/Tileset_Ground_113.png")
    k.loadSprite("ca","/sprites/camino/Tileset_Road_18.png")

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
        tileHeight:80,
        tiles: {
            w: () => [k.sprite("ca"), k.area(), k.body({ isStatic: true }),k.scale(5)],
            ".": () => [k.sprite("c"),k.area(),k.scale(5),],
            "@": () => [k.sprite("coin"), k.area(), k.scale(0.2), "coin"],
            p: () => [k.sprite("pic"), k.area(), k.scale(0.1),"pic"],
        },
    };

    return () => {
        k.setBackground([0,50,0]);
        k.addLevel(level, levelConfig);
        // Agrega jugador, objetos, enemigos etc.
    };
};
export default level0;
