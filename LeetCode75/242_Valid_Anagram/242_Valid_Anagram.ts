function isAnagram(s: string, t: string): boolean {
    const sLen = s.length
    const tLen = t.length

    if (sLen !== tLen) return false

    for (let i = 0; i < sLen; i++) {
        if (t.includes(s[i])) {
            t = t.replace(s[i], '')
        }
    }
    if (t.length > 0) return false
    return true
}

const s = "anagram"
const t = "nagaram"
console.log(isAnagram(s, t))
