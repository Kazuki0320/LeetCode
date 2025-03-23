function findTheDifference(s: string, t: string): string {
let code = 0;

for (let i = 0; i < s.length; i++) {
    code ^= s.charCodeAt(i); // s の各文字の文字コードと XOR
}

for (let i = 0; i < t.length; i++) {
    code ^= t.charCodeAt(i); // t の各文字の文字コードと XOR
}

return String.fromCharCode(code); // 最後に残った1文字を戻す

}
