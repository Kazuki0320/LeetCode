export function twoSum(nums: number[], target: number): number[] {
	const seen = new Map<number, number>(); // (val, index)
	
	for (let i = 0; i < nums.length; i++) {
		const current = target - nums[i];

		if (seen.has(current)) {
			return [seen.get(current)!, i];
		} else {
			seen.set(nums[i], i); 
		}
	}
	return [];
}