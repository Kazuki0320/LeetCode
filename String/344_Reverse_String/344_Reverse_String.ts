function reverseString(s: string[]): void {
    let left = 0, right = s.length - 1;
    
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]]; // 交換
        left++;
        right--;
    }
}

const s = ["h", "e", "l", "l", "o"];
reverseString(s); // ここでは戻り値なし
console.log(s); // ["o", "l", "l", "e", "h"]

