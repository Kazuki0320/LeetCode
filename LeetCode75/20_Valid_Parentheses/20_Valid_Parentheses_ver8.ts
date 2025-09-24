type ValidationResult2 = 
	| { valid: true}
  | { valid: false; message: string}

function validParentheses(s: string): ValidationResult2 {
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

			if (!topElement) {
				return {
					valid: false,
					message: `予期しない閉じ括弧`
				}
			}

			if (needElement === undefined || needElement !== topElement) {
				return {
					valid: false,
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
	return { valid: true};
}