export function isValid(s: string): boolean {
	const stack: string[] = [];
	/**
	 * なぜ、keyを閉じ括弧にしているのか？
	 * A.閉じ括弧を見つけたときに、スタックに積んでいる開き括弧と等しいかを判定するため
	 */
	const map = new Map<string, string>([
		[")", "("],
		["}", "{"],
		["]", "["]
	])

	for (let char of s) {
		if (map.has(char)) {
			const topElement = map.get(char) ? stack.pop() : "#";

			if (topElement === char) {
				return false
			}
		} else {
			stack.push(char)
		}
	}

	return stack.length === 0;
}
