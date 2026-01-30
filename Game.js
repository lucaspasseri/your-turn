import Player from "./Player.js";

export default class Game {
	#players = [];
	#currPlayerIndex;

	get numberOfPlayers() {
		return this.#players.length;
	}

	get players() {
		return [...this.#players];
	}

	get totalTime() {
		return this.players.reduce((acc, curr) => (acc += curr.timer.curr), 0);
	}

	addPlayer(name) {
		if (name === undefined) {
			name = `Player ${this.numberOfPlayers + 1}`;
		}

		const newPLayer = new Player(name);
		this.#players.push(newPLayer);

		if (this.#currPlayerIndex == undefined && this.#players.length === 1) {
			this.#currPlayerIndex = 0;
		}
	}

	toggle() {
		if (this.#currPlayerIndex === undefined) return;

		const currIndex = this.#currPlayerIndex;
		const nextIndex = (currIndex + 1) % this.players.length;

		this.players[currIndex].timer.stop();

		if (this.players[nextIndex].timer.start === undefined) {
			this.players[nextIndex].timer.init();
		} else {
			this.players[nextIndex].timer.play();
		}

		this.#currPlayerIndex = nextIndex;
	}
}
