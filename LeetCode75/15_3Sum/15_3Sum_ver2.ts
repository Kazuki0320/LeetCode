export function threeSum(nums: number[]): number[][] {
	const len = nums.length;
	const target = 0;
	const result = [];

	if (!len) return [];

	for (let i = 0; i < len; i++) {
		for (let j = i + 1; j < len; j++) {
			for (let k = j + 2; k < len; k++) {
				if (target === nums[i] + nums[j] + nums[k]) {
					result.push([i, j, k]);
				}
			}
		}
	}
}