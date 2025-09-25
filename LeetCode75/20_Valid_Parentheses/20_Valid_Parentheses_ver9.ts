function validParentheses(s: string): boolean {
	const map = new Map([
		[")", "("],
		["}", "{"],
		["]", "["]
	])

	const stack: string[] = []

	for (let char of s) {
		if (map.has(char)) {
			const needElement = map.get(char)
			const topElement = stack.pop()

			if (needElement === undefined || needElement !== topElement) {
				return false
			}
		} else {
			stack.pop()
		}
	}
	return true
}