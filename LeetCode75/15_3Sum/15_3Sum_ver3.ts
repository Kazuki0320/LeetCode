export function threeSum(nums: number[]): number[][] {
	const length = nums.length;
	if (length < 3) return [];

	nums.sort()
	for (let i = 0; i < length - 2; i++) {
		const result = [];
		let left = nums[i+1];
		let right = length - 1;

		const sum = nums[i] + nums[left] + nums[right];

		while(left < right) {
			if (sum === 0) {
				result.push([i,left,right]);

				while(left < right && nums[left] === nums[left+1]) left++;
				while(left < right && nums[right] === nums[right-1]) right--;

				left++;
				right--;
			} else {
				left++;
				right--;
			}
		}
	}
}