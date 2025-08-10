const personajes = (k:any)=>{
    const p1 = k.add([
            k.sprite("p1"),
            k.pos((80*4)+20, (80*14)+20),
            k.area(),
            k.scale(0.4, 0.4),
            k.z(2),
            "p1"
        ]);
    p1.play("idle")
};

export default personajes;