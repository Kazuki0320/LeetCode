function isPalindrome(x: number): boolean {
    const strNumber = x.toString();
    console.log(strNumber);
    let comparisonStr: string = ""; 
    for (let i = strNumber.length-1; i >= 0; i--) {
        comparisonStr += strNumber[i];
    }
    if (comparisonStr !== strNumber) {
        return false;
    }
    return true;
};

/**
 ・与えられた数値と文字の逆側を順に比較
 ・もし異なる場合
    - false
 * 
 */
