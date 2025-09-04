export function threeSum(nums: number[]): number[][] {
	let result: number[][] = [];
	const len = nums.length;

	nums.sort((a,b) => a-b);

	for (let i = 0; i < len - 2; i++) {
		let left = i+1;
		let right = len-1;

		if (i > 0 && nums[i] === nums[i-1]) continue;

		while(left<right) {
			let sum = nums[i] + nums[left] + nums[right]

			if (sum === 0) {
				result.push([nums[i], nums[left], nums[right]]);

				while (left < right && nums[left] === nums[left+1]) left++;
				while (left < right && nums[right] === nums[right-1]) right--;
				left++;
				right--;
			} else if (sum < 0) {
				left++;
			} else {
				right--;
			}
		}
	}

	return result
}