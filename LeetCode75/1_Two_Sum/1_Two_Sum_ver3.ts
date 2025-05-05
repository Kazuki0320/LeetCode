export function twoSum(nums: number[], target: number): number[] {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
	return [];
}

/**
 * 今度は、あえて愚直解として二重ループを試してみる
 * ・ 補数の計算との処理時間の差分を見てみる
 * 
 * 目的： 補数との差分を見るために、二重ループでnums[i] + nums[j] = targetのi,jを返す処理
 * 
 * 方法： 二重ループ
 * 
 * ロジック：
 * ・ Mapは使わない
 * ・ 固定値がfor文のi
 * ・ 比較対象がforのjとなる
 * ・ targetの値になるような値が存在するかを確認していく
 * ・ targetと等しくない場合、cotinue
 *・  targetと等しい場合は、resultにpush
 * ・ 最後にreturnを返す
 */