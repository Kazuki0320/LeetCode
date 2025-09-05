function isValid(s: string): boolean {
    const map = new Map<string, string> ([
        [')', '('],
        ['}', '{'],
        [']', '['],
    ]);
    const stack: string[] = [];

    for (let char of s) {
        if (map.has(char)) {
            const topElement = stack.length > 0 ? stack.pop() : "#";

            if (map.get(char) !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

/**
 【実装】
 1.閉じ括弧と開き括弧のkeyとvalueを持つ変数を宣言
 2.与えられてきた開き括弧の文字列の配列を宣言する
 3.sの配列の要素をループ処理
 4.もし、map変数にキーが存在する場合
    - stackの最後の値を取得
    - もし、mapのキー値と等しくない場合
        - falseを返す
 5.もし、map変数にキーが存在しない場合
 */
