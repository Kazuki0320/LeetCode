function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const len = s.length

    for (let i = 0; i < len / 2; i++) {
        if (s[i] !== s[len - 1 - i]) {
            return false
        }
    }
    return true
}

const str = "a ba"
console.log(isPalindrome(str))


