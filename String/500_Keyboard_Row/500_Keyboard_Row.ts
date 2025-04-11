function findWords(words: string[]): string[] {
    const row1 = new Set("qwertyuiop")
    const row2 = new Set("asdfghjkl")
    const row3 = new Set("zxcvbnm")

    let result: string[] = []

    for (const word of words) {
        const lowerWord = word.toLowerCase()

        // 最初の文字がどの行にあるかで基準を決める
        let baseRow: Set<string>
        const firstChar = lowerWord[0]

        if (row1.has(firstChar)) {
            baseRow = row1
        } else if (row2.has(firstChar)) {
            baseRow = row2
        } else {
            baseRow = row3
        }

        // その行に全ての文字列が含まれているかをチェック
        const isValid = [...lowerWord].every(char => baseRow.has(char))
        if (isValid) {
            result.push(word) //元の大文字のまま返す
        }
    }

    return result
}

const s = ["Alaska"]
console.log(findWords(s))

/**
 * ・rowをSetインスタンスを利用して、宣言
 * ・resultは、strig[]のように型定義
 * ・全ての文字を小文字にする
 * ・Setを利用すると、hasが使用できるのので、まずは、一文字目がどの行にあるのかを検索
 * ・その行に他の文字が含まれているのかをチェック
 * ・もし、含まれている場合、resultに元の大文字のままpushする
 * ・resultを返す
 */
