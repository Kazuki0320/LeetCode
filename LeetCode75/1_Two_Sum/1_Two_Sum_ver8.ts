export function twoSum(nums: number[], target: number): number[] {
	if (!nums) return [];

	const map = new Map<number, number>();

	for (let i = 0; i < nums.length; i++) {
		const current = target - nums[i];
	
		if (map.has) {
			return [map.get(current), i];
		} else {
			map.push(num[i], i);
		}
	}
	return [];
}