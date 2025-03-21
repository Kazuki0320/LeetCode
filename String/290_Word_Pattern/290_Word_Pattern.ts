function wordpattern(pattern: string, s: string): boolean {
    const words = s.split(" ")
    const patternLength = pattern.length

    if (patternLength !== words.length) return false

    const charToWords = new Map<string, string>()
    const wordToChar = new Map<string, string>()

    for (let i = 0; i < patternLength; i++) {
        const char = pattern[i]
        const word = words[i]

        // 登録されている場合の処理
        if (charToWords.has(char) && charToWords.get(char) !== word) return false
        if (wordToChar.has(word) && wordToChar.get(word) !== char) return false

        // 登録されていない場合の処理
        charToWords.set(char, word)
        wordToChar.set(word, char) 
    }

    return true
}

const pattern = "aba"
const s = "dog cat dog"
console.log(wordpattern(pattern, s));
