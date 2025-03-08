function isIsmorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    const mapST = new Map<string, string>()
    const mapTS = new Map<string, string>()

    for (let i = 0; i < s.length; i++) {
        const charS = s[i]
        const charT = t[i]

        // s→tのマッピングが既にある場合
        if (mapST.has(charS)) {
            if (mapST.get(charS) !== charT) return false
        } else {
            mapST.set(charS, charT)
        }
        console.log(mapST)
        // t→sのマッピングが既にある場合
        if (mapTS.has(charT)) {
            if (mapTS.get(charT) !== charS) return false
        } else {
            mapTS.set(charT, charS)
        }
        console.log(mapTS)
    }
    
    return true
}

const str1 = "foo"
const str2 = "bar"

console.log(isIsmorphic(str1, str2))

