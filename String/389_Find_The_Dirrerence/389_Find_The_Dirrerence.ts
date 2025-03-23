function findTheDifference(s: string, t: string): string {
    const tChars = new Map<string, boolean>()

    for (let i = 0; i < t.length; i++) {
        const tChar = t[i]
        const sChar = s[i]
        tChars.set(tChar, false)

        if (tChars.get(sChar) === false) {
            tChars.set(sChar, true)
        }
    }

    for (const [key, value] of tChars) {
        if (value === false) {
            return key
        }
    }
    return ""
}
