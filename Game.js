import Player from "./Player.js";

export default class Game {
	#players = [];

	get numberOfPlayers() {
		return this.#players.length;
	}

	get players() {
		return [...this.#players];
	}

	addPlayer(name) {
		if (name === undefined) {
			name = `Player ${this.numberOfPlayers + 1}`;
		}

		const newPLayer = new Player(name);
		this.#players.push(newPLayer);
	}
}
