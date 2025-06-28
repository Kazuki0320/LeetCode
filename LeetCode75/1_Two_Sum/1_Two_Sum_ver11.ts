export function twoSum(nums: number[], target: number): number[] {
	const len = nums.length;
	
	for (let i = 0; i < len; i++) {
		for (let j = i + 1; j < len - 1; j++) {
			if (target === nums[i] + nums[j]) {
				return [i, j];
			}
		} 
	}

	return [];
}