/**
 * 目的
 * targetの文字列の出現箇所の要素を返す問題
 * 
 * 処理
 * まずは、過去の処理からどのような処理にしているのか把握
 * 
 * # mapsAreEqual
 * 	- sMapとpMapを引数として受け取っている
 * 
 * # findAnagrams
 * - pの文字頻度をpMapに記録
 * - sの文字列を管理
 *  - なぜ、sの文字列を管理するのか
 * - pMap
 *  - pの文字頻度を管理
 * - ウィンドウサイズを超えたら、左端の文字を除外
 *  - sMapの中に、outCharが存在すしない場合
 *   - sMapからdelete
 *  - それ以外
 *  	- sMapにset
 * - pと同じサイズのウィンドウに達したとき、sMapとpMapを比較
 *  - もし、等しい時はresultに結果をpush
 * 
 */
function mapsAreEqual(a: Map<string, number>, b:  Map<string, number>): boolean {
	if (a.size !== b.size) return false;
	for (const [key, val] of a) {
		if (b.get(key) !== val) return false;
	}

	return true;
}


function findAnagrams(s: string, p: string): number[] {
	const pMap = new Map<string, number>();
	const sMap = new Map<string, number>();
	const result: number[] = [];

	// pの文字頻度を記録
	for (const char of p) {
		const count = pMap.get(char) || 0;
		pMap.set(char, count+1);
	}

	const pLen = p.length;

	for (let i = 0; i < s.length; i++) {
		// 1.s[i] をsMapに追加
		const inChar = s[i];

		sMap.set(inChar, (sMap.get(inChar) || 0) + 1);

		// 2.ウィンドウサイズを超えたら、左端の文字を除外
		if (i >= pLen) {
			// 現在のウィンドウから外れる文字を取得
			const outChar = s[i - pLen];
			// その文字のカウントを1減らす
			const count = sMap.get(outChar)! - 1;

			// カウントが0なら削除、そうでなければ更新
			if (count === 0) {
				sMap.delete(outChar);
			} else {
				sMap.set(outChar, count);
			}
		}

		// 3.pと同じサイズのウィンドウに達したら比較
		if (i >= pLen - 1 && mapsAreEqual(sMap, pMap)) {
			result.push(i - pLen + 1);
		}
	}
	return result;
}