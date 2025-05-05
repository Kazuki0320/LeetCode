function  sanitizeString(s: string):string {
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

        if (!sanitizeString(currentFirst)) {
            start++    
        } else if (!sanitizeString(currentLast)) {
            last--
        } else {
            if (sanitizeString(currentFirst) != sanitizeString(currentLast)) {
                return false
            }
            start++
            last--
        }
    }
    return true
}

