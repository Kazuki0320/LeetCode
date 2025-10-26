/**
 * 目的
 * sの中にpの文字列を見つけ出し、各要素の最初のindexを返す
 * 
 * 処理
 * 2つの関数
 * 1.findAnagrams
 * 2.mapsAreaEquals
 * - sMapとpMapの値が合致しているか判断する関数
 * 
 * 2つのfor
 * - pMapの文字列頻度をオブジェクト化
 * - sMapの文字列のオブジェクト化
 * 3つのif文
 * 1.ウィンドウサイズを維持しているか
 * 2.countが0の時
 * 3.パターン長に達したらpMapとsMapを比較
 */

function mapsAreaEquals(a: Map<string, number>, b: Map<string, number>) {
	if (a.size !== b.size) return false;
	for (let [key, value] of a) {
		if (b.get(key) !== value) return false
	}
	return true;
}

function findAnagrams(s: string, p: string): number[] {
	const pMap = new Map<string, number>();
	const sMap = new Map<string, number>();

	const result: number[] = [];

	for(let char of p) {
		const count = pMap.get(char) || 0;
		pMap.set(char, count+1);
	}

	const pLen = p.length;

	for(let i = 0; i < s.length; i++) {
		const inChar = s[i];

		sMap.set(inChar, (sMap.get(inChar) || 0) + 1);

		if (i >= pLen) {
			const outChar = s[i-pLen];
			const count = sMap.get(outChar)! - 1;

			if (count === 0) {
				sMap.delete(outChar)
			} else {
				sMap.set(outChar, count)
			}
		}

		if (i >= pLen - 1 && mapsAreaEquals(sMap, pMap)) {
			result.push(i-pLen+1)
		}
	}

	return result;
}