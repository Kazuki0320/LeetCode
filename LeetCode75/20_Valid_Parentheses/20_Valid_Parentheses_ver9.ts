type validationResult3 = 
 | { valid: true}
 | { valid: false; message: string}

function validParentheses(s: string): validationResult3 {
	const map = new Map([
		[")", "("],
		["}", "{"],
		["]", "["]
	])

	const stack: string[] = []

	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		if (map.has(char)) {
			const needElement = map.get(char)
			const topElement = stack.pop()

			if (!top) {
				return {
					valid: false,
					message: `予期しない閉じ括弧`
				}
			}
			if (needElement === undefined || needElement !== topElement) {
				return {
					valid:false,
					message: `不一致`
				}
			}
		} else {
			stack.push(char)
		}
	}
	if (stack.length > 0) {
		return {
			valid: false,
			message: `未クローズの括弧`
		}
	}

	return { valid: true }
}