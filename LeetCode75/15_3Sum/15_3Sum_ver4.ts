export function threeSum(number:[]): number[][]{
	const len = nums.length;
	const result: number[][] = [];

	nums.sort();

	for (let i = 0; i < len; i++) {
		let left = i;
		let right = len - 1;

		if (nums[i] === nums[left] || nums[i] === nums[right]) continue;

		while (left < right) {
			if (0 === nums[i] + nums[left] + nums[right]) {
				result.push([i, nums[left], nums[right]]);

				left++;
				right--;
			} else {
				while (left < right && nums[left] === nums[right]) left++;
				while (left < right && nums[left] === nums[right]) right--;

				left++;
				right--;
			}
		}
	}
	return result;
}