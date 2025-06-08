/**
 * 【手順】
 * 1. returnの返り値を宣言
 * 2. ２重ループを作成
 * 	- 2つ目のループの始まりは、1からとなる
 * 3. 2つ目のループでもし、targetとnums[i]+nums[j]が等しかった場合
 * 	- 返り値として、[i,j]を返す
 */
export function twoSum(nums: number[], target: number): number[] {
	const numsStr = nums.length;

	for (let i = 0; i < numsStr; i++) {
		for (let j = i + 1; j < numsStr; j++) {
			if (target === nums[i] + nums[j]) {
				return [i, j];
			}
		} 
	}
	return [];
}

