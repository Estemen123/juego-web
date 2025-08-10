import { GameObj } from "kaboom";
import { Dispatch, SetStateAction } from "react";

const colisionPlayer = (k: any, player: any,score:any, score1:number) => {
    let contetCf: boolean[] = [true, true];

    let dialog: boolean = false;
    let interaccion: boolean = false;

    let typeIteraccion: number = 0;
    let dialogPjt: number = 0;
    let line: number = 0;
    const lines: string[] = [
        "",
        "Hola viajero, bienvenido a mi aldea.",
        "Cuidado con los monstruos más adelante.",
        "Buena suerte en tu viaje.",
    ];
    const dialogBox = k.add([
        k.rect(k.width() - 40, 100, { radius: 8 }),
        k.pos(20, k.height() - 120),
        k.color(0, 0, 0),
        k.opacity(0.8),
        k.fixed(),
        "dialogBox",
    ]);

    const dialogText = dialogBox.add([
        k.text(lines[line], { size: 24, width: k.width() - 60 }),
        k.pos(20, 20),
        k.color(255, 255, 255),
    ]);

    player.onCollide("coin", (coin: GameObj) => {
        k.destroy(coin);
        score1++;
        score.text = "Score: "+(score1);
    });

    player.onCollide("pic", (pic: GameObj) => {
        pic.opacity = 0.5;
        dialogPjt = 1;
        dialog = true;
    });

    player.onCollideEnd("pic", (pic: GameObj) => {
        pic.opacity = 1;
        dialogPjt = 0;
        dialog = false;
    });

    player.onCollide("pjt0", (pjt0: GameObj) => {
        console.log(score1);
        k.go("game", 1, score1);
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

    k.onKeyRelease("space", () => {
        if (dialog) {
            switch (dialogPjt) {
                case 0:
                    break;
                case 1:
                    console.log(line);
                    dialogText.text = lines[line];
                    if (line > lines.length) line = 0;
                    else line++;
                    break;

                default:
                    break;
            }
        } else {
            if (interaccion) {
                switch (typeIteraccion) {
                    case 1:
                        if (contetCf[0]) {
                            console.log("hola");
                            contetCf[0]=false;
                        } else {
                            console.log("esta");
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
