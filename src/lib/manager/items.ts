export default function uiItems(k: any, inventario: number[]) {
    k.loadSprite("key", "/sprites/casa/key.png");
    k.loadSprite("gem", "/sprites/casa/gem.png");

    const uiItems: any[] = [];

    const createUiItem = (spriteName: string, index: number) => {
        k.add([k.sprite(spriteName), k.area(), k.pos(24, (35 * index) + 24), k.scale(1.75), k.fixed()]);
        
        const textObj = k.add([
            k.text(": " + inventario[index]),
            k.pos(45, (35 * index) + 24),
            { value: inventario[index] },
            k.fixed(),
        ]);

        uiItems.push(textObj); // Guardamos la referencia del texto
    };

    createUiItem("key", 0);
    createUiItem("gem", 1);

    return uiItems; // Retornamos las referencias para poder modificarlas
}
