export function findAnagrams(s: string, p: string): number[] {
	const pMap = new Map<string, number>();
	const result: number[] = [];

	for (const char of p) {
		const count = pMap.get(char) || 0;
		pMap.set(char, count+1);
	}

	for (let i = 0; i < s.length; i++) {
		if () {
			
		} else {

		}
	}
	return result;
};