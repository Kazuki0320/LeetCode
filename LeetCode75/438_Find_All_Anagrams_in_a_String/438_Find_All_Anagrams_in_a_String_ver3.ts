/**
 * 目的
 * sからpの文字列を探して、見つけた文字列の最初の要素を返す
 * 
 * ポイント
 * - pの文字列頻度を作成
 * - sMapで文字列の管理を行い、挿入と削除を行う
 *  - s[i]をsMapに追加
 * - pMapとsMapの比較
 * - mapsAreEqualの関数を用意して、sMapとpMapの比較を行う
 */
function mapsAreEqual(a: Map<string, number>, b: Map<string, number>) {
	if (a.size !== b.size) return false;
	for (const [key, val] of a) {
		if (b.get(key) !== val) return false
	}
	return true
}

export function findAnagrams(s: string, p: string): number[] {
	const pMap = new Map<string, number>()
	const sMap = new Map<string, number>()
	const result: number[] = []

	for (let char of p) {
		const a = pMap.get(char) || 0;
		pMap.set(char, a + 1)
	}

    const pLen = p.length;

	for (let i = 0; i < s.length; i++) {
		// s[i]をsMapに追加
		const inChar = s[i]
		sMap.set(inChar, (sMap.get(inChar) || 0) + 1);

		// ウィンドウサイズを超えたら、左端を除外
		if (i >= pLen) {
			// iがplenを超えているということは、例えば3であれば3-3で0となる
			const outChar = s[i-pLen]
			// 出現数を1つ減らす
			const count = sMap.get(outChar)! - 1;

            if (count === 0) {
                sMap.delete(outChar);
            } else {
                sMap.set(outChar, count);
            }
        }

        // ウィンドウサイズがパターンの長さに達したら比較
        if (i >= pLen - 1 && mapsAreEqual(sMap, pMap)) {
            result.push(i - pLen + 1);
        }
    }
    return result;
}