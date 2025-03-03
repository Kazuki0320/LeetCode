function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    const len = s.length

    for (let i = 0; i < len / 2; i++) {
        if (s[i] !== s[len - 1 - i]) {
            return false
        }
    }
    return true
}

// const s = "A man, a plan, a canal: Panama"
// const s = "race a car"
const s = ''
console.log(isPalindrome(s))

// let str = "A man, a plan"
// let change = str.replace(/[^a-zA-Z0-9]/g, '')
// console.log(change)

// let str1 = "Samurai"
// console.log(str1.toLowerCase())
