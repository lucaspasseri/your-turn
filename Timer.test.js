import Timer from "./Timer.js";

test(" initial Timer properties", () => {
	jest.useFakeTimers();
	const timer = new Timer();
	expect(timer.start).toBeUndefined();
	expect(timer.curr).toBe(0);

	timer.init();
	expect(timer.start).toBeDefined();
});

test("if the Timer can check the elapsed time", () => {
	jest.useFakeTimers();

	const timer = new Timer();
	timer.init();

	jest.advanceTimersByTime(1000);
	expect(timer.curr).toBe(1000);

	jest.advanceTimersByTime(2000);
	expect(timer.curr).toBe(3000);

	jest.advanceTimersByTime(10000);
	expect(timer.curr).toBe(13000);

	jest.useRealTimers();
});

test("if the Timer can be stopped and restarted", () => {
	jest.useFakeTimers();

	const timer = new Timer();
	timer.init();

	jest.advanceTimersByTime(1000);
	expect(timer.curr).toBe(1000);

	timer.stop();

	jest.advanceTimersByTime(3000);
	expect(timer.curr).toBe(1000);

	timer.play();

	jest.advanceTimersByTime(3000);
	expect(timer.curr).toBe(4000);

	jest.useRealTimers();
});

test("if the Timer is running or not", () => {
	jest.useFakeTimers();
	const timer = new Timer();
	jest.advanceTimersByTime(2000);
	expect(timer.isRunning).toBe(false);
	expect(timer.curr).toBe(0);

	timer.init();
	jest.advanceTimersByTime(2000);
	expect(timer.isRunning).toBe(true);
	expect(timer.curr).toEqual(2000);

	timer.stop();
	jest.advanceTimersByTime(2000);
	expect(timer.isRunning).toBe(false);
	expect(timer.curr).toEqual(2000);

	timer.play();
	jest.advanceTimersByTime(2000);
	expect(timer.isRunning).toBe(true);
	expect(timer.curr).toEqual(4000);

	timer.stop();
	jest.advanceTimersByTime(2000);
	expect(timer.isRunning).toBe(false);
	expect(timer.curr).toEqual(4000);

	timer.play();
	jest.advanceTimersByTime(2000);
	expect(timer.isRunning).toBe(true);
	expect(timer.curr).toEqual(6000);
});

test("if the Timer can be reset", () => {
	const timer = new Timer();

	expect(timer.start).toBeUndefined();

	timer.init();
	expect(timer.start).toBeDefined();

	timer.reset();
	expect(timer.start).toBeUndefined();
});
