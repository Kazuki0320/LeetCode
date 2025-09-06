export function isValid(s: string): boolean {
	const stack: string[] = [];
	/**
	 * なぜ、keyを閉じ括弧にしているのか？
	 * A.閉じ括弧を見つけたときに、スタックに積んでいる開き括弧と対応しているかを確認したい
	 */
	const map = new Map<string, string>([
		[")", "("],
		["}", "{"],
		["]", "["]
	])

	for (let char of s) {
		if (map.has(char)) {
			const needElement = map.get(char);
			const topElement = stack.pop();

			if (needElement !== topElement) {
				return false
			}
		} else {
			stack.push(char)
		}
	}

	return stack.length === 0;
}
