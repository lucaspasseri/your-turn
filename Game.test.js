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

test("if a Game can return the array of players", () => {
	const game = new Game();

	expect(game.players).toEqual([]);

	game.addPlayer("Adam");
	game.addPlayer();
	game.addPlayer();
	game.addPlayer("Eva");

	expect(game.players).toHaveLength(4);
});

test("if a Game can return the total sum of elapsed time during all players turns", () => {
	jest.useFakeTimers();
	const game = new Game();

	game.addPlayer("Adam");
	game.addPlayer();
	game.addPlayer();
	game.addPlayer("Eva");

	expect(game.totalTime).toBe(0);

	game.players[0].timer.init();

	jest.advanceTimersByTime(2000);
	expect(game.totalTime).toBe(2000);

	game.players[0].timer.stop();
	game.players[1].timer.init();

	jest.advanceTimersByTime(2000);
	expect(game.totalTime).toBe(4000);

	game.players[1].timer.stop();
	game.players[2].timer.init();
	game.players[3].timer.init();

	jest.advanceTimersByTime(2000);
	expect(game.totalTime).toBe(8000);

	game.players[2].timer.stop();
	game.players[3].timer.stop();

	jest.advanceTimersByTime(2000);
	expect(game.totalTime).toBe(8000);

	game.players.forEach(player => player.timer.play());

	jest.advanceTimersByTime(2000);
	expect(game.totalTime).toBe(16000);

	game.players.forEach(player => player.timer.stop());

	jest.advanceTimersByTime(2000);
	expect(game.totalTime).toBe(16000);
});

test("if a Game can pause the current timer running and play the next timer ", () => {});
