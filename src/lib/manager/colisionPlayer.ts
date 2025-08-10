import { GameObj } from "kaboom";

const colisionPlayer = (
    k: any,
    player: any,
    uiItemsList: any,
    inventario: number[]
) => {
    let contetCf: boolean[] = [true, true];

    let dialog: boolean = false;
    let interaccion: boolean = false;

    let typeIteraccion: number = 0;

    /// personajes
    let dialogPjt: number = 0;
    let line: number = 0;
    const pW = [false, false, false];
    const lines: string[][] = [
        [
            "H¡Ah, muchacho! No sueles ver caras nuevas por aquí… Me recuerdas a mi hijo, él también tenía esa prisa por volver a casa.Pero yo… no puedo irme todavía.",
            "Necesito que me ayudes a encontrar las cuatro piezas de pan que se me cayeron al río esta mañana. Eran para la ofrenda de mi esposa, a quien no pude despedir como debía.",
            "Si las recuperas, te diré un camino que muy pocos conocen.",
            "",
        ],
        [
            "Ah… pequeño… hacía tiempo que nadie entraba en este cuarto.",
            "¿Ves este cofre? Está vacío… como yo.",
            "Si me ayudas a llenarlo con tres llaves, quizás encuentre lo que busco… y quizás tú también halles tu camino.",
        ],
    ];
    const lines1: string[][] = [
        [
            "Gracias, hijo. Esto es lo único que me queda de mis días buenos… llévalo, quizá te abra más de una puerta.",
            "Y recuerda… no todos los caminos gemas donde uno espera.",
        ],[ "Gracias… esas gemas son parte de mi familia … incluso la noche que todo cambió."]
    ];
    const dialogBox = k.add([
        k.rect(k.width() - 40, 100, { radius: 8 }),
        k.pos(20, k.height() - 120),
        k.color(0, 0, 0),
        k.opacity(0.8),
        k.fixed(),
        "dialogBox",
        k.z(3),
    ]);

    const dialogText = dialogBox.add([
        k.text("", { size: 24, width: k.width() - 60 }),
        k.pos(20, 20),
        k.color(255, 255, 255),
    ]);

    player.onCollide("coin", (coin: GameObj) => {
        k.destroy(coin);
        inventario[0]++;
        console.log(inventario);
        uiItemsList[0].text = ": " + inventario[0];
    });

    // colison personajes
    player.onCollide("p1", (pic: GameObj) => {
        pic.opacity = 0.5;
        dialogPjt = 1;
        dialog = true;
    });

    player.onCollideEnd("p1", (pic: GameObj) => {
        pic.opacity = 1;
        dialogPjt = 0;
        dialog = false;
    });

    player.onCollideEnd("p2", (pic: GameObj) => {
        pic.opacity = 1;
        dialogPjt = 0;
        dialog = false;
    });

    player.onCollide("p2", (pic: GameObj) => {
        pic.opacity = 0.5;
        dialogPjt = 2;
        dialog = true;
    });
    player.onCollide("cofre1", (cf: GameObj) => {
        cf.opacity = 0.5;
        interaccion = true;
        typeIteraccion = 1;
    });

    player.onCollideEnd("cofre1", (cf: GameObj) => {
        cf.opacity = 1;
        interaccion = false;
        typeIteraccion = 0;
    });
    // items colliones

    player.onCollide("keys", (keys: GameObj) => {
        k.destroy(keys);
        inventario[0]++;
        uiItemsList[0].text = ": " + inventario[0];
    });

    player.onCollide("gems", (coin: GameObj) => {
        k.destroy(coin);
        inventario[1]++;
        uiItemsList[1].text = ": " + inventario[1];
    });

    player.onCollide("breads", (coin: GameObj) => {
        k.destroy(coin);
        inventario[2]++;
        uiItemsList[2].text = ": " + inventario[2];
    });
    //portals

    player.onCollide("portal1", (pjt0: GameObj) => {
        console.log(inventario);
        k.go("game", 1, inventario);
    });
    player.onCollide("portal2", (pjt0: GameObj) => {
        console.log(inventario);
        k.go("game", 2, inventario);
    });
    player.onCollide("portal3", (pjt0: GameObj) => {
        console.log(inventario);
        k.go("game", 3, inventario);
    });
    player.onCollide("portal4", (pjt0: GameObj) => {
        console.log(inventario);
        k.go("game", 0, inventario);
    });
    k.onKeyRelease("space", () => {
        console.log(dialog);
        console.log(line);
        if (dialog) {
            switch (dialogPjt) {
                case 0:
                    break;
                case 1:
                    if (!pW[0]) pW[0] = inventario[2] >= 3;

                    if (!pW[0]) {
                        dialogText.text = lines[0][line];
                        if (line >= lines[0].length - 1) line = 0;
                        else line++;
                        setTimeout(() => (dialogText.text = ""), 3000);
                    } else {
                        inventario[2] = 0;
                        uiItemsList[2].text = ": 0";
                        dialogText.text = lines1[0][line];
                        if (line >= lines1[0].length - 1) line = 0;
                        else line++;
                        setTimeout(() => (dialogText.text = ""), 3000);
                    }

                    break;
                    case 2:
                    if (!pW[1]) pW[1] = inventario[1] >= 3;

                    if (!pW[1]) {
                        dialogText.text = lines[1][line];
                        if (line >= lines[1].length - 1) line = 0;
                        else line++;
                        setTimeout(() => (dialogText.text = ""), 3000);
                    } else {
                        inventario[1] = 0;
                        uiItemsList[1].text = ": 0";
                        dialogText.text = lines1[1][line];
                        if (line >= lines1[1].length - 1) line = 0;
                        else line++;
                        setTimeout(() => (dialogText.text = ""), 3000);
                    }

                    break;
                default:
                    break;
            }
        } else {
            if (interaccion) {
                switch (typeIteraccion) {
                    case 1:
                        if (contetCf[0]) {
                            contetCf[0] = false;
                            dialogText.text = "Encontraste una gema:";
                            inventario[1]++;
                            uiItemsList[1].text = ": " + inventario[1];
                            const item = dialogBox.add([
                                k.sprite("gem"),
                                k.scale(1.4),
                                k.pos(300, 20),
                            ]);
                            setTimeout(() => {
                                item.destroy();
                                dialogText.text = "";
                            }, 2000);
                        } else {
                            dialogText.text = "no hay nada";
                            setTimeout(() => {
                                dialogText.text = "";
                            }, 2000);
                        }

                        break;
                    default:
                        break;
                }
            }
        }
    });

    k.onKeyRelease("", () => {});
};

export default colisionPlayer;
