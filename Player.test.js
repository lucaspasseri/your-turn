import Player from "./Player.js";

test("if the Player has a name and a Timer", () => {
	expect(() => new Player()).toThrow("Player needs a name");
	const player = new Player("Adam");

	expect(player.name).toBe("Adam");
	expect(player.timer.isRunning).toBe(false);

	player.timer.init();
	expect(player.timer.isRunning).toBe(true);

	player.timer.stop();
	expect(player.timer.isRunning).toBe(false);

	player.timer.play();
	expect(player.timer.isRunning).toBe(true);
});
