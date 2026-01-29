import Game from "./Game.js";

test("if a Game has a defined number of players", () => {
	const game = new Game();

	expect(game.numberOfPlayers).toBe(0);

	game.addPlayer("Adam");
	game.addPlayer();
	game.addPlayer();
	game.addPlayer("Eva");

	expect(game.numberOfPlayers).toBe(4);
});

test("if a Game could return the array of players", () => {
	const game = new Game();

	expect(game.players).toEqual([]);

	game.addPlayer("Adam");
	game.addPlayer();
	game.addPlayer();
	game.addPlayer("Eva");

	expect(game.players).toHaveLength(4);
});
