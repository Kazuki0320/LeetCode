export function threeSum(nums: number[]): number[][] {
	const len = nums.length;
	const result = []; // 型定義が必要

	if (len < 3) return [];

	nums.sort((a,b) => a - b);

	for (let i = 0; i < len; i++) {
		const left = nums[i] + 1;
		const right = len - 1;

		const sum = nums[i] + left + right;

		if (nums[i] === nums[i]-1) continue;

		while(left < right) {
			if (sum === 0) { // 条件が足りない
				result.push([nums[i], left, right]);

				while (nums[i]-1 === nums[i] && nums[i] === left) left++; // 条件の誤り
				while (nums[i] === nums[i]+1 && nums[i] === right) right--; // 条件の誤り

				left++;
				right--;
			} else if () { // 条件の不足
				left++;
			} else {
				right--;
			}
		}
	}
	return []
}