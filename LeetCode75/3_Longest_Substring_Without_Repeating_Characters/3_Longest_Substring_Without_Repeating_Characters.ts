export function lengthOfLongestSubstring(s: string): number {
	const map = new Map<string, number>();
	let left = 0;
	let maxLen = 0;

	for (let right = 0; right < s.length; right++) {
		const char = s[right];

		if (map.has(char) && left <= map.get(char)!) {
			left = map.get(char)! + 1;
		}

		map.set(char, right);
		maxLen = Math.max(maxLen, right - left + 1);
	}
	return maxLen;
}	

/**
 * 【このコードでしてること】
 * ・ 重複のない文字列の最長の長さを求めている（maxLen）
 * ・ 各文字が「最後に出現した位置」を記録（map）
 * ・ なぜ、right-left+1とmaxLenを比較するのか
 *		→重複のない部分文字列の長さを表している
			→インデックスの差分を計算するため、実際の値より1少なくなってしまうために、1を足している
 * ・ leftは、重複が発生しない最も長い部分文字列を保つために、ウィンドウの始点をどこに置くかを示している
			→重複が発生するたびに「新しい安全なスタート地点」を指すように動いている
 */