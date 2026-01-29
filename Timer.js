export default class Timer {
	start = undefined;
	acc = 0;
	isRunning = false;

	get curr() {
		if (this.start === undefined || this.start === null) {
			return this.acc;
		}

		return this.acc + performance.now() - this.start;
	}

	init() {
		if (this.start === undefined) {
			this.start = performance.now();
			this.isRunning = true;
		}
	}

	stop() {
		if (this.isRunning) {
			this.acc = this.curr;
			this.start = null;
			this.isRunning = false;
		}
	}

	play() {
		if (!this.isRunning) {
			this.start = performance.now();
			this.isRunning = true;
		}
	}

	reset() {
		this.start = undefined;
		this.acc = 0;
		this.isRunning = false;
	}
}
