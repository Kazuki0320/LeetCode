export function lengthOfLongestSubstring(s: string): number {
	const map = new Map<string, number>();
	let left = 0;
	let maxLen = 0;
	
	for (let right = 0; right < s.length; right++) {
		const char = s[right];

		if (map.has(char) && left <= map.get(char)!) {
			left = map.get(char)! + 1
		}

		map.set(char, right)
		maxLen = Math.max(maxLen, right-left+1)
	}
	return maxLen;
}