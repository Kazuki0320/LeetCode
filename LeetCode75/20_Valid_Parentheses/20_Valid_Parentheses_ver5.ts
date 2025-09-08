export function isValid(s: string): boolean {
	const map = new Map([
		[')', '('],
		[']', '['],
		['}', '{']
	])

	const stack: string[] = []

	// stackと場合はfalse
	for (let char of s) {
		if (map.has(s)) {
			// 閉じ括弧だった場合は、当てはまるkeyとついになっている開き括弧を取得
			// ぶち込んだstackの開き括弧が上記と等しいか
			const needElement = map.get(char)
			const topElement = stack.pop()

			if (needElement !== topElement) {
				return false;
			}
		} else {
			stack.push(char)
		}
	}

	return stack.length === 0;
}