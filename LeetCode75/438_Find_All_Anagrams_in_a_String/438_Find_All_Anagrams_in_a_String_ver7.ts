export function findAnagrams(s: string, p: string): number[] {
	const pMap = new Map<string, number>();
	const sMap = new Map<string, number>();

	const result: number[] = []

	for (let char of p) {
		const count = pMap.get(char)  || 0;
		pMap.set(char, count + 1)
	}

	const pLen = p.length;

	for (let i = 0; i < s.length; i++) {
		const inChar = s[i]

		sMap.set(inChar, (sMap.get(inChar)  || 0) + 1)
	}


}