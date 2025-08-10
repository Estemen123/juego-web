const level0 = (k: any, nevelIndex: number) => {
    k.loadSprite("grass", "/sprites/grass.png");
    k.loadSprite("wall", "/sprites/wall.png");
    k.loadSprite("coin", "/sprites/coin.png");
    k.loadSprite("pic", "/sprites/pic.png");
    k.loadSprite("c", "/sprites/cesped/Tileset_Ground_113.png");
    k.loadSprite("ca", "/sprites/camino/Tileset_Road_18.png");
    k.loadSprite("floorH1", "/sprites/casa/floor1.png");
    k.loadSprite("floorH2", "/sprites/casa/floor2.png");
    k.loadSprite("bed", "/sprites/casa/bed.png");
    k.loadSprite("fondo", "/sprites/casa/fondo.png");
    k.loadSprite("wallH", "/sprites/casa/w3.png");
    k.loadSprite("wh1", "/sprites/casa/w1.png");
    k.loadSprite("wh2", "/sprites/casa/w2.png");
    k.loadSprite("wh4", "/sprites/casa/w4.png");
    k.loadSprite("cfH", "/sprites/casa/cofre.png");
    k.loadSprite("keys", "/sprites/casa/keys.png", {
        sliceX: 3,
        anims: {
            idle: { from: 0, to: 2, speed: 4, loop: true },
        },
    });

    const level = [
        [
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
            "wwwwwwwwwwwwwwwwwwwwwwwwwwww",
        ],
        [
            "008666663666639",
            "07000010000000@4",
            "07000020c0200004",
            "0700000111100004",
            "0700000000000004",
            "070000@000000004",
            "070000200002000400000000000004",
            "-------------------------------",
        ],
        [
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
            "wwwwwwwwwwwwwwwwwwwwwwwwwwww",
        ],
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
        ],
    ];

    const levelConfig = {
        tileWidth: 80,
        tileHeight: 80,
        tiles: {
            w: () => [
                k.sprite("ca"),
                k.area(),
                k.body({ isStatic: true }),
                k.scale(5),
            ],
            2: () => [
                k.sprite("bed"),
                k.area(),
                k.scale(2),
                k.body({ isStatic: true }),
                k.z(3),
            ],
            f: () => [k.sprite("pic"), k.area(), k.scale(0.1), "pjt0"],
            ".": () => [k.sprite("c"), k.area(), k.scale(5)],
            "@": () => [k.sprite("coin"), k.area(), k.scale(0.2), "coin"],
            // "@": () => {
            //     const obj = k.add([
            //         k.sprite("keys"),
            //         k.area(),
            //         k.scale(2),
            //         "coin",
            //     ]);
            //     obj.play("idle");
            //     return obj;
            // },
            p: () => [k.sprite("pic"), k.area(), k.scale(0.1), "pic"],
            3: () => [
                k.sprite("wallH"),
                k.area(),
                k.scale(2, 3),
                k.body({ isStatic: true }),
            ],
            4: () => [
                k.sprite("wh2"),
                k.area(),
                k.scale(1.8, 5),
                k.body({ isStatic: true }),
            ],
            6: () => [
                k.sprite("wh1"),
                k.area(),
                k.scale(2, 3),
                k.body({ isStatic: true }),
            ],
            9: () => [
                k.sprite("wh4"),
                k.area(),
                k.scale(2.2, 3.23),
                k.body({ isStatic: true }),
            ],
            7: () => [
                k.sprite("wh2"),
                k.area(),
                k.scale(-1.8, 5),
                k.body({ isStatic: true }),
            ],
            8: () => [
                k.sprite("wh4"),
                k.area(),
                k.scale(-2.2, 3.23),
                k.body({ isStatic: true }),
            ],
            "-": () => [
                k.sprite("wh2"),
                k.area(),
                k.rotate(90),
                k.scale(1.8, -5),
                k.body({ isStatic: true }),
                k.z(3),
            ],
            c: () => [
                k.sprite("cfH"),
                k.area(),
                k.scale(3),
                k.body({ isStatic: true }),
                "cofre1",
            ],
            // 0: () => [k.sprite("floorH1"), k.area(), k.scale(1.41),],
            // 1: () => [k.sprite("floorH2"), k.area(), k.scale(1.41)],
        },
    };

    return () => {
        k.addLevel(level[nevelIndex], levelConfig);
        switch (nevelIndex) {
            case 0:
                k.setBackground([0, 50, 0]);
                break;
            case 1:
                k.setBackground([128, 128, 128]);
                k.add([
                    k.sprite("fondo"),
                    k.pos(0, 0),
                    k.scale(3), // Escalar para que cubra más
                    k.z(-1), // Asegura que esté detrás de todo
                ]); // Asegura que esté detrás de todo
                break;
            default:
                break;
        }
    };
};
export default level0;
