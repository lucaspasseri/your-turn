// import Game from "../Game.js";
// import { normalize } from "./util/normalize.js";

// document.documentElement.setAttribute("data-theme", "light-mode");

// const game = new Game();
// game.addPlayer("Adam");
// game.addPlayer();
// game.addPlayer("Eva");
// // game.addPlayer();

// const container = document.querySelector("#content-container");

// const main = document.createElement("main");
// main.className = "flex flex-col min-h-[50vh]";

// const h1 = document.createElement("h1");
// h1.textContent = "Your Turn";

// const timersContainer = document.createElement("div");
// timersContainer.id = "timers-container";
// timersContainer.className =
// 	"border-4 border-red-700 flex flex-1 relative justify-center items-center";

// const smallerDimension = Math.min(
// 	timersContainer.offsetWidth,
// 	timersContainer.offsetHeight
// );
// console.log({
// 	w: timersContainer.offsetWidth,
// 	h: timersContainer.offsetHeight,
// });
// console.log({ timersContainer, smallerDimension });

// const radius = Number(smallerDimension);

// const centerOfCircle = document.createElement("div");
// centerOfCircle.className = "border-2 border-purple-700 absolute";

// timersContainer.appendChild(centerOfCircle);

// [...game.players].forEach((player, index) => {
// 	const playerContainer = document.createElement("div");
// 	playerContainer.className = "border-2 border-purple-700 absolute";
// 	playerContainer.textContent = player.name ?? "";

// 	const angleDeg = normalize(index, 0, game.players.length, 0, 360);
// 	const angleRad = angleDeg * (Math.PI / 180);

// 	const x = radius * Math.cos(angleRad);
// 	const y = radius * Math.sin(angleRad);
// 	console.log({ index, angleDeg, x, y });

// 	playerContainer.style.transform = `translate(${x}px, ${y}px)`;

// 	timersContainer.appendChild(playerContainer);
// });

// const newPlayerContainer = document.createElement("div");

// const h3 = document.createElement("h3");
// h3.textContent = "Add player";

// newPlayerContainer.appendChild(h3);

// main.append(h1, timersContainer);

// container.append(main, newPlayerContainer);

// import Game from "../Game.js";
// import { normalize } from "./util/normalize.js";

// document.documentElement.setAttribute("data-theme", "light-mode");

// /* -----------------------------
//    Game setup
// ----------------------------- */
// const game = new Game();
// game.addPlayer("Adam");
// game.addPlayer();
// game.addPlayer("Eva");

// /* -----------------------------
//    DOM creation
// ----------------------------- */
// const container = document.querySelector("#content-container");

// const main = document.createElement("main");
// main.className = "flex flex-col min-h-[50vh]";

// const h1 = document.createElement("h1");
// h1.textContent = "Your Turn";

// const timersContainer = document.createElement("div");
// timersContainer.id = "timers-container";
// timersContainer.className =
// 	"border-4 border-red-700 flex flex-1 relative justify-center items-center";

// main.append(h1, timersContainer);
// container.append(main);

// /* -----------------------------
//    Rendering logic
// ----------------------------- */
// function renderPlayers() {
// 	// Clear previous players (important for resize / re-render)
// 	timersContainer.innerHTML = "";

// 	const { width, height } = timersContainer.getBoundingClientRect();
// 	if (width === 0 || height === 0) return;

// 	const radius = Math.min(width, height) / 2;
// 	const centerX = width / 2;
// 	const centerY = height / 2;

// 	// Optional: visualize center
// 	const center = document.createElement("div");
// 	center.className = "border-2 border-purple-700 absolute w-2 h-2 rounded-full";
// 	center.style.left = `${centerX}px`;
// 	center.style.top = `${centerY}px`;
// 	center.style.transform = "translate(-50%, -50%)";
// 	timersContainer.appendChild(center);

// 	game.players.forEach((player, index) => {
// 		const playerContainer = document.createElement("div");
// 		playerContainer.className = "border-2 border-purple-700 absolute px-2 py-1";
// 		playerContainer.textContent = player.name ?? "";

// 		player.timer.init();
// 		const timer = document.createElement("p");
// 		timer.textContent = player.timer.curr;
// 		playerContainer.appendChild(timer);

// 		const angleDeg = normalize(index, 0, game.players.length, 0, 360);
// 		const angleRad = angleDeg * (Math.PI / 180);

// 		const x = centerX + radius * Math.cos(angleRad);
// 		const y = centerY + radius * Math.sin(angleRad);

// 		playerContainer.style.left = `${x}px`;
// 		playerContainer.style.top = `${y}px`;
// 		playerContainer.style.transform = "translate(-50%, -50%)";

// 		timersContainer.appendChild(playerContainer);
// 	});
// }

// /* -----------------------------
//    Lifecycle handling
// ----------------------------- */

// // Initial render after layout
// requestAnimationFrame(renderPlayers);

// // Re-render on resize (very important)
// const resizeObserver = new ResizeObserver(() => {
// 	requestAnimationFrame(renderPlayers);
// });

// resizeObserver.observe(timersContainer);

// import Game from "../Game.js";
// import { normalize } from "./util/normalize.js";

// document.documentElement.setAttribute("data-theme", "light-mode");

// /* -----------------------------
//    Game setup
// ----------------------------- */
// const game = new Game();
// game.addPlayer("Adam");
// game.addPlayer();
// game.addPlayer("Eva");

// /* -----------------------------
//    Initialize timers ONCE
// ----------------------------- */
// game.players.forEach(player => {
// 	player.timer.init();
// });

// /* -----------------------------
//    DOM creation
// ----------------------------- */
// const container = document.querySelector("#content-container");

// const main = document.createElement("main");
// main.className = "flex flex-col min-h-[50vh]";

// const h1 = document.createElement("h1");
// h1.textContent = "Your Turn";

// const timersContainer = document.createElement("div");
// timersContainer.id = "timers-container";
// timersContainer.className =
// 	"border-4 border-red-700 flex flex-1 relative justify-center items-center";

// main.append(h1, timersContainer);
// container.append(main);

// /* -----------------------------
//    Keep DOM refs for updates
// ----------------------------- */
// const playerElements = new Map();

// /* -----------------------------
//    Render players (layout only)
// ----------------------------- */
// function renderPlayers() {
// 	timersContainer.innerHTML = "";
// 	playerElements.clear();

// 	const { width, height } = timersContainer.getBoundingClientRect();
// 	if (!width || !height) return;

// 	const radius = Math.min(width, height) / 2;
// 	const centerX = width / 2;
// 	const centerY = height / 2;

// 	game.players.forEach((player, index) => {
// 		const playerContainer = document.createElement("div");
// 		playerContainer.className =
// 			"border-2 border-purple-700 absolute px-2 py-1 text-center";

// 		const name = document.createElement("p");
// 		name.textContent = player.name ?? "";

// 		const timer = document.createElement("p");
// 		timer.textContent = player.timer.curr;

// 		playerContainer.append(name, timer);

// 		const angleDeg = normalize(index, 0, game.players.length, 0, 360);
// 		const angleRad = angleDeg * (Math.PI / 180);

// 		const x = centerX + radius * Math.cos(angleRad);
// 		const y = centerY + radius * Math.sin(angleRad);

// 		playerContainer.style.left = `${x}px`;
// 		playerContainer.style.top = `${y}px`;
// 		playerContainer.style.transform = "translate(-50%, -50%)";

// 		timersContainer.appendChild(playerContainer);

// 		// Save reference for timer updates
// 		playerElements.set(player, timer);
// 	});
// }

// /* -----------------------------
//    Timer UI updater (1s tick)
// ----------------------------- */
// setInterval(() => {
// 	playerElements.forEach((timerEl, player) => {
// 		timerEl.textContent = player.timer.curr;
// 	});
// }, 1000);

// /* -----------------------------
//    Lifecycle handling
// ----------------------------- */

// // Initial render after layout
// requestAnimationFrame(renderPlayers);

// // Re-render on resize
// const resizeObserver = new ResizeObserver(() => {
// 	requestAnimationFrame(renderPlayers);
// });
// resizeObserver.observe(timersContainer);

import Game from "../Game.js";
import { normalize } from "./util/normalize.js";
import { formatTime } from "./util/formatTime.js";

document.documentElement.setAttribute("data-theme", "light-mode");

const game = new Game();
game.addPlayer("Adam");
game.addPlayer();
game.addPlayer("Eva");

const container = document.querySelector("#content-container");
// container.className = "flex ";

const main = document.createElement("main");
main.className = "flex flex-col flex-1";

const h1 = document.createElement("h1");
h1.textContent = "Your Turn";

const timersContainer = document.createElement("div");
timersContainer.id = "timers-container";
timersContainer.className =
	"border-4 border-red-700 flex flex-1 relative sm:justify-center sm:items-center";

main.append(h1, timersContainer);
container.append(main);

/* -----------------------------
   Keep DOM refs for updates
----------------------------- */
const playerElements = new Map();

/* -----------------------------
   Render players (layout only)
----------------------------- */
function renderPlayers() {
	timersContainer.innerHTML = "";

	playerElements.clear();

	const { width, height } = timersContainer.getBoundingClientRect();
	if (!width || !height) return;

	const radius = Math.min(width, height) / 3;
	const centerX = width / 2;
	const centerY = height / 2;

	const totalTimeContainer = document.createElement("div");
	totalTimeContainer.className =
		"border-2 border-purple-700 absolute px-2 py-1 text-center";

	const title = document.createElement("p");
	title.textContent = "Total";

	const totalTimer = document.createElement("p");
	totalTimer.textContent = game.totalTime;
	totalTimer.id = "total-timer";

	const togglePlayerButton = document.createElement("button");
	togglePlayerButton.className = "bg-purple-600";
	togglePlayerButton.textContent = "Toggle";
	togglePlayerButton.addEventListener("click", () => game.toggle());

	totalTimeContainer.append(title, totalTimer, togglePlayerButton);
	timersContainer.appendChild(totalTimeContainer);

	game.players.forEach((player, index) => {
		const playerContainer = document.createElement("div");
		playerContainer.className =
			"border-2 border-purple-700 absolute px-2 py-1 text-center min-w-[103px]";

		const name = document.createElement("p");
		name.textContent = player.name ?? "";

		const timer = document.createElement("p");
		timer.textContent = player.timer.curr;

		const stopButton = document.createElement("button");
		stopButton.className = "bg-red-400";
		stopButton.textContent = "Stop";
		stopButton.addEventListener("click", () => player.timer.stop());

		const playButton = document.createElement("button");
		playButton.className = "bg-green-400";
		playButton.textContent = "Play";
		playButton.addEventListener("click", () => player.timer.play());

		playerContainer.append(name, timer, stopButton, playButton);

		const angleDeg = normalize(index, 0, game.players.length, 0, 360);
		const angleRad = angleDeg * (Math.PI / 180);

		const x = centerX + radius * Math.cos(angleRad);
		const y = centerY + radius * Math.sin(angleRad);

		playerContainer.style.left = `${x}px`;
		playerContainer.style.top = `${y}px`;
		playerContainer.style.transform = "translate(-80%, -50%)";

		timersContainer.appendChild(playerContainer);

		// Save reference for timer updates
		playerElements.set(player, timer);
	});
}

/* -----------------------------
   Recursive timer UI loop
----------------------------- */
let timerLoopId = null;

function startTimerLoop() {
	if (timerLoopId !== null) return; // prevent duplicates

	function tick() {
		playerElements.forEach((timerEl, player) => {
			timerEl.textContent = formatTime(player.timer.curr);
		});

		const totalTimer = document.querySelector("#total-timer");
		totalTimer.textContent = formatTime(game.totalTime);

		timerLoopId = setTimeout(tick, 100);
	}

	tick();
}

function stopTimerLoop() {
	if (timerLoopId !== null) {
		clearTimeout(timerLoopId);
		timerLoopId = null;
	}
}

/* -----------------------------
   Lifecycle handling
----------------------------- */

// Initial render after layout
requestAnimationFrame(() => {
	renderPlayers();
	startTimerLoop();
});

// Re-render on resize (layout only)
const resizeObserver = new ResizeObserver(() => {
	requestAnimationFrame(renderPlayers);
});
resizeObserver.observe(timersContainer);
