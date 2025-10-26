/**
 * 目的
 * 文字列sの中で、同じ文字を含まない最長文字列の長さを求める
 * 
 * 処理
 * 1 初期化
 *  - maps: 各文字の最新の出現位置（index）を保持する
 *  - left: 現在のウィンドウ（部分文字列）の左端を示す
 *  - maxLen: 最大の部分文字列長を記録する
 * 
 * 2 ループ開始
 *  - 現在の文字 char = s[right]を取り出す
 * 
 * 3 同じ文字が既にウィンドウ内にある場合
 *  - map.has(char) && left <= map.get(char)!の時
 *   -　その文字の直後から新しいウィンドウを開始する
 *   - left = map.get(char)! + 1
 * 
 * 4 現在の文字の位置をmapに登録（上書き）
 *  0 map.set(char, right)
 * 
 * 5 最大長の更新
 *  - right-left+1で現在のウィンドウ長を算出
 * 
 * 6 結果を返す
 *  - ループが終わったらmaxLenを返す
 * 
 */

export function lenghtOfLongestSubstring(s: string): number {
	const map = new Map<string, number>();
	let left = 0;
	let maxLen = 0;

	for (let right = 0; right < s.length; right++) {
		const char = s[right];

		if(map.has(char) && left <= map.get(char)!) {
			left = map.get(char)! + 1;
		}

		map.set(char, right)
		maxLen = Math.max(maxLen, right-left+1)
	}
	return maxLen;
}