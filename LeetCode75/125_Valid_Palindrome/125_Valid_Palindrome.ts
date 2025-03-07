function  changeStr(s: string):string {
    return s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
}

function isPalindrome(s: string): boolean {
    if (!s) {
        return true
    }

    let start = 0
    let last = s.length - 1

    while (start <= last) {
        const currentFirst = s.charAt(start)
        const currentLast = s.charAt(last)

        if (!changeStr(currentFirst)) {
            start++    
        } else if (!changeStr(currentLast)) {
            last--
        } else {
            if (changeStr(currentFirst) != changeStr(currentLast)) {
                return false
            }
            start++
            last--
        }
    }
    return true
}

