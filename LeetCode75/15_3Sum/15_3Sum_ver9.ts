export function threeSum(nums: number[]): number[][] {
	/** 
	 * 目的：0がターゲットとなるので、各要素から0となる組み合わせを見つける
	 * やり方：
	 * - sort
	 * - TwoPointer
	 * - 実質3つのポインタを利用する
	 *   - for文でのポインタ
	 *   - leftがrightに追いつくまでループ処理（while）
	 *   	- left
	 *   	- right
	 */

	const result: number[][] = []
	const len = nums.length

	if (len < 3) return [];

	nums.sort((a,b) => a-b)

	for(let i = 0; i < len-2; i++) {
		let left = i + 1;
		let right = len - 1;

		if (i > 0 && nums[i] === nums[i-1]) continue;

		while (left < right) {
			// 3つの組み合わせの和が0になるかどうかを知りたい
			let sum = nums[i] + nums[left] + nums[right];

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
	return result;
}