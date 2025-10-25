/**
 * 目的
 * sの中にアナグラムしたpの文字列が存在するので、文字列を見つけたときの最初の要素を取得する
 * 
 * 処理
 * sMapとpMapを使用する
 * pMapの文字列頻度を管理
 * - ループ処理で、pのそれぞれの文字列を抽出
 * sMapで、文字列の管理を行い、挿入と削除をする
 * - 挿入と削除の処理
 * - ウィンドウサイズがパターンの長さに達したら比較
 *  - mapsAreEqual関数を作成
 *  - aとbのサイズが等しいか
 * 
 */
export function findAnagrams(s: string, p: string): number[] {
	const pMap = new Map<string, number>();
	const sMap = new Map<string, number>();

	const result: number[] = []

	for (let char of p) {

	}

	for (let i = 0; i < s.length; i++) {

		if (i >= pLen) {
			if (count === 0) {

			}
		}
		if (i >= pLen - 1 && mapsAreEqual(sMap, pMap)) {
			
		}
	}
}