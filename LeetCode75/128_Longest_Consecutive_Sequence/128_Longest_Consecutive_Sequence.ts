export function longestConsecutive(nums: number[]): number {
	const numSet = new Set(nums);
	let maxLength = 0;

	for (const num of numSet) {
		if (!numSet.has(num - 1)) {
			let currentNum = num;
			let currentStreak = 1;

			while (numSet.has(currentNum + 1)) {
				currentNum += 1;
				currentStreak += 1;
			}

			maxLength = Math.max(maxLength, currentStreak);
		}
	}

	return maxLength;
}