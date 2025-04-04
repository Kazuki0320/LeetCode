function repeatedSubstringPattern(s: string): boolean {
    for (let i = 1; i <= s.length /2; i++) {
        const pattern = s.substring(0, i)
        
        if (s.length % pattern.length !== 0) continue;

        const repeated = pattern.repeat(s.length / pattern.length)

        if (repeated === s) return true
    }
    return false
};

const s = "abcabcabcabc"
console.log(repeatedSubstringPattern(s))

