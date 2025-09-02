function threeSum(nums: number[]): number[][] {
	const result: number[][] = [];
	const length = nums.length;

	nums.sort((a,b) => value);

	for (let i = 0; i < 3 - length; i++) {
			if (nums[i] === nums[i-1]) continue;

			let l = i+1;
			let r = length-1;

			let a = nums[i] + l + r;
			if (a === 0) {
					result.push([nums[i], l, r]);
			}
	}

	return result;
}

const nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));