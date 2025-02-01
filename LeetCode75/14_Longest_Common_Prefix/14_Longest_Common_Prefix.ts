function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    const firstStr = strs[0];
    let prefix = "";

    for (let i = 0; i < firstStr.length; i++) {
        const char = firstStr[i];

        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char || i >= strs[j].length) {
                return prefix;
            }
        }
        prefix += char;
    }

    return prefix;
};

/**
【処理の言語化】
1. 配列の要素が0の場合にはreturn
2. 最初の文字列を基準にする
3. return値の変数を宣言
4. 最初の文字列を基準に、後の要素の文字列と比較
    - 1つ目のループでは、firstStrの文字列の長さを基準とする
        - firstStr[i]から基準となる文字を指定   
        - 2つ目のループでは、全体の要素数の長さを基準とする
            - もし、str[j][i]とcharが異なる場合 または str[j]の要素の長さが0以下の場合
                - prefixを返す
        - もし、上記条件分岐に当てはまらない場合は、prefixにcharを追加
5. prefixを返す
 * 
 */

/**
【問題のポイント】
1. 共通接頭辞
    - 配列内の全ての文字列の最初から始まる共通部分を見つける事が目標
2. 早期終了の検討
    - 配列に文字列が1つもない場合、直接から文字列””を返す
    - 配列に1つだけ文字列がある場合、その文字列全体が共通接頭辞となる
3. 短い文字列がキー
    - 共通接頭辞の長さは、配列内の最短文字列の長さを超えることはない
4. 部分比較の考え方
    - 文字列の先頭から1文字ずつ比較して共通部分を見つけていく
    - 配列全体を順番に比較し、一致しない文字が現れた時点で処理を終了する
5. 効率性
    - 最悪の場合、全ての文字列の全文字を比較する必要があるため、効率的なアルゴリズムを考える必要がある
    - 例えば、最短文字列を基準に比較を行えば、無駄な処理を省く事ができる
 */
