import Timer from "./Timer.js";

export default class Player {
	name;
	timer;

	constructor(name) {
		if (name === undefined) {
			throw new Error("Player needs a name");
		}

		this.name = name;
		this.timer = new Timer();
	}
}
