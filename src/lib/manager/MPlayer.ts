export default function managerPlayer(k: any, player: any) {
    const speed = 200;
    let curretAnim = "idle";

    return () => {
        player.play("idle");

        k.onKeyDown("left", () => {
            player.move(-speed, 0);
            player.scale.x = Math.abs(player.scale.x);
            if (curretAnim !== "run") {
                curretAnim = "run";
                player.play(curretAnim);
            }
        });

        k.onKeyDown("right", () => {
            player.move(speed, 0);
            player.scale.x = -Math.abs(player.scale.x);
            if (curretAnim !== "run") {
                curretAnim = "run";
                player.play(curretAnim);
            }
        });

        k.onKeyDown("up", () => {
            player.move(0, -speed);
        });

        k.onKeyDown("down", () => {
            player.move(0, speed);
        });

        k.onKeyRelease("right", () => {
            if (curretAnim !== "idle") {
                curretAnim = "idle";
                player.play("idle");
            }
        });

        k.onKeyRelease("left", () => {
            if (curretAnim !== "idle") {
                curretAnim = "idle";
                player.play("idle");
            }
        });
    };
}
