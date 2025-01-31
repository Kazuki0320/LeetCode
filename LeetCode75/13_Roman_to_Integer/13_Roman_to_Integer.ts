function romanToInt(s: string): number {
    const romanMap: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        const currentVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];

        // 特殊な減算ルールを適用
        if (nextVal && currentVal < nextVal) {
            sum += nextVal - currentVal;
            i++; // 次の文字をスキップ
        } else {
            sum += currentVal;
        }
    }

    return sum;
}

/**
文字列に値する数値の合計を出力する
基本は、文字列を前から走査
文字列分のループ処理
・1-3は、IIIの数
・4は、IVの減算
・5は、V
・6-8は、VにIを足した数
・9は、IXの減算
・10はX


条件分岐1
Iのあとが、VorXである場合
・IはV(5)とX(10)の前に置くと4,9
条件分岐2
Xのあとが、LorCである場合
・XはL(50),C(100)の前に置くと40,90
条件分岐3
Cのあとが、DorMである場合
・CはD(500),M(1000)の前におくと400,900
 */
