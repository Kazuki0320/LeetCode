function firstUniqChar(s: string): number {
    const countMap: Record<string, number> = {}

    // 1. 出現回数を数える
    for (const char of s) {
        countMap[char] = (countMap[char] || 0) + 1
    }
    console.log(countMap)

    // 2. 最初に1回しか出てこない文字を探す
    for (let i = 0; i < s.length; i++) {
        if (countMap[s[i]] === 1) return i
    }

    // 3. 見つからなければ、-1を返す
    return -1
}

const s = "leedcode"
console.log(firstUniqChar(s))

/**
 *
 * 処理の流れ
 * - 各文字列を指すポインタiを作成
 * - ループ処理
 * - 各文字列と比較するためのポインタjを作成
 * - ループ処理
 * - もし、各文字列と比較したときiとjが等しくない場合
 *   - 各文字列を指すポインタjを出力
 * - それ以外である場合
 *   - 1を出力
 *
 */
