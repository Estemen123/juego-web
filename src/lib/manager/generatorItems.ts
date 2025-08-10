const generator = (
    k: any,
    h: number,
    w: number,
    item: string,
    scene: string[]
) => {
    const randInt = (min: number, max: number) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    let x,
        y = 0;
    do {
        x = randInt(1, w - 1);
        y = randInt(1, h - 1);
    } while (scene[y].charAt(x) !== 'V' && scene[y].charAt(x) !== '0');
    console.log(scene[y].charAt(x));
    const obje = k.add([
        k.sprite(item),
        k.scale(2),
        k.pos(x * 80, y * 80),
        k.area(),
        item,
    ]);
    obje.play("idle");
};

export default generator;