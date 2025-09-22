function isValid(s:string):boolean {
	const map = new Map([
		[")", "("],
		["}", "{"],
		["]", "["]
	])

	const stack:string[] = []

	for(let char of s) {
		if(map.has(char)) {
			const needElement = map.get(char)
			const topElement = stack.pop()

			if (needElement !== topElement) {
				return false
			}
		} else {
			stack.push(char)
		}
	}
	return stack.length === 0
}

/**
 * 忘れてしまう原因
 * 1.手順の理解が断片的
 * - 「スタックを使う」ことは覚えている
 *  - なぜスタックを使うのか
 *  - どの瞬間にpush/popするのか
 *  という部分を忘れやすい
 * 2.パターン認識が固まっていない
 * Valid Parenthesesのような問題は「スタックを使う典型パターン」
 * 3.アウトプット不足
 * コードを”読む”だけでなく、ゼロから"書く”練習を繰り返す必要がある
 */