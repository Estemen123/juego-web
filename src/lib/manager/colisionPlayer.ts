import { GameObj } from "kaboom";

const colisionPlayer = (k: any, player: any) => {
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
    });

    player.onCollide("pic", (pic: GameObj) => {
        pic.opacity = 0.5;
        dialogPjt = 1;
    });

    player.onCollideEnd("pic", (pic: GameObj) => {
        pic.opacity = 1;
        dialogPjt = 0;
    });

    k.onKeyRelease("space", () => {
        switch (dialogPjt) {
            case 0:
                break;
            case 1:
                console.log(line);
                dialogText.text = lines[line];
                if (line >= lines.length) line = 0;
                else line++;
                break;

            default:
                break;
        }
    });
};

export default colisionPlayer;
