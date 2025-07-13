export function lengthOfLongestSubstring(s:string): number {
	const map = new Map<string, number>();
	let left = 0;
	let right = 0;
	let maxLen = 0;

	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		if (map.has(char)) {
			left = map.get(char)! + 1;
		}

		map.set(char, i);
		maxLen = Math.max(maxLen, right-left+1);
	}
	return maxLen
}

/**
 * 今回の問題でやりたいこと
 * ・ 最長の部分文字列を探す
 * 
 * どんな処理が必要か
 * ・ 最長の長さの変数
 * ・ スライディングウィンドウを使用するためのleft,right
 *  - left:部分文字列の始まり
 *  - right:部分文字列の終わり
 * ・ 最後に出現した文字列の場所を格納するためのmap
 * ・ maxLenを求める際は、right-left+1と前回のmaxLenを比較する
 */

