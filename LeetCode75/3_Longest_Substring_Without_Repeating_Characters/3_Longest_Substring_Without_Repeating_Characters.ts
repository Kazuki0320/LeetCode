export function lengthOfLongestSubstring(s: string): number {
	const map = new Map<string, number>();
	let count = 0;

	for (const str of s) {
		if (map.has(str)) {
			return count;
		} else {
			count++;
			map.set(str, count);
		}
	}
	return 0;
}