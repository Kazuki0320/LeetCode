export function twoSum(nums: number[], target: number): number[] {
	if (nums.length === 0) return [];
	
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
	
	return [];
}