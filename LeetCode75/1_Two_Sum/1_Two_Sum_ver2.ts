export function twoSum(nums: number[], target: number): number[] {
	const seen = new Map<number, number>();

	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i];

		if (seen.has(diff)) {
			return [seen.get(diff)!, i];
		} else {
			seen.set(nums[i], i);
		}
	}
	return [];
}

/**
 * 目的： nums[i] + nums[j] = targetとなるi,jを返す
 * 
 * 方法： 1パスで探索しながら、Mapに値を記録
 * 
 * ロジック：
 * ・ target - nums[i]がMapに存在すればそれがペアとなる
 * ・ Mapのkey = 値,value = インデックス
 * ・ 見つからなければ、Mapに現在の値を追加して次へ
 * 
 * 実装手順
 * 1.Map<number, number>を用意
 * 2.forループでnums[i]ごとにtarget-nums[i]を探す
 * 3.あれば、[Map.get(差分)!, i]を返す
 * 4.無ければ、Mapに現在の値を追加
 * 
 */