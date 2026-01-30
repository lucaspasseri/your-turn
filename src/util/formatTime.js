export function formatTime(ms) {
	const totalSeconds = Math.floor(ms / 1000);

	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	if (totalSeconds < 60) {
		return `${seconds}s`;
	}

	if (totalSeconds < 3600) {
		return `${minutes}m ${seconds}s`;
	}

	return `${hours}h ${minutes}m ${seconds}s`;
}
