function addBinary(a: string, b: string): string {
  let result: string = "";  // 結果のバイナリ文字列
  let carry = 0;  // 繰り上がりを格納する変数

  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    const num1 = parseInt(a[i] ?? "0"); // `a` の現在の桁（無ければ "0"）
    const num2 = parseInt(b[j] ?? "0"); // `b` の現在の桁（無ければ "0"）
    const sum = num1 + num2 + carry;  // 2つのバイナリ桁 + 繰り上がりを計算
    
    carry = sum > 1 ? 1 : 0;  // `sum` が 2以上なら繰り上げ（1）、そうでなければ繰り上げなし（0）
    result = (sum % 2 === 1 ? "1" : "0") + result;  // 現在の桁を `result` に追加
  }

  return carry ? "1" + result : result;  // 最後に繰り上がりが残っていたら "1" を先頭に追加
};

