export function convertTitle(columnNumber: number): string {
	let result = '';

	while(columnNumber > 0) {
		columnNumber--;
		let reminder = columnNumber % 26;
		result = String.fromCharCode(65 + reminder) + result;
		columnNumber = Math.floor(columnNumber / 26);
	}

	return result;
}