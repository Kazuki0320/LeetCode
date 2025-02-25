function strStr(haystack: string, needle: string): number {
    const result = haystack.indexOf(needle);
    return result
}

const needle = "leeto"
const haystack = "leetcode"
console.log(strStr(haystack, needle))
