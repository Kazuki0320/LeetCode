function longestPalindrome(s: string): number {
    let length = 0;
    let hasOdd = false;

    const counts: Record<string, number> = {};
    for (const char of s) {
        counts[char] = (counts[char] || 0) + 1;
    }

    for (const count of Object.values(counts)) {
        length += Math.floor(count / 2) * 2;
        if (count % 2 === 1) hasOdd = true;
    }
    if (hasOdd) length += 1;
    
    return length;
}
