export function longestConsecutive(nums: number[]): number {
	const numSet = new Set(nums);
	let maxLength = 0;

	for (const num of nums) {
		if (!numSet.has(num - 1)) {
			let currentLength = 1;

			for (let next = num+1; numSet.has(next); next++) {
				currentLength++;
			}

			maxLength = Math.max(maxLength, currentLength);
		}
	}

	return maxLength;
}