function mapsAreEqual(a: Map<string, number>, b: Map<string, number>) {
	if (a.size !== b.size) return false;
	for (let [key, val] of a) {
		if (b.get(key) !== val) return false
	}
	return true
}

function findAnagrams(s :string, p: string): number[] {
	const pMap = new Map<string, number>();
	const sMap = new Map<string, number>();
	const result: number[] = []

	for (let char of p) {
		const count = pMap.get(char) || 0;
		pMap.set(char, count + 1)
	}

	const pLen = p.length;
	for (let i = 0; i < s.length; i++) {
		const inChar = s[i]
		sMap.set(inChar, (sMap.get(inChar) || 0) + 1);

		if ( i >= pLen) {
			const outChar = s[i - pLen]
			const count = sMap.get(outChar)! - 1;

			if (count === 0) {
				sMap.delete(outChar);
			} else {
				sMap.set(outChar, count);
			}
		}

		if (i >= pLen - 1 && mapsAreEqual(sMap, pMap)) {
			result.push(i - pLen + 1);
		}
	}
	return result
}