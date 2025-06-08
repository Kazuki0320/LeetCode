/**
 * 【手順書】
 * 1. Mapインスタンスを作成(キー：数値、値：インデックス)
 * 
 * 2. 配列をループして、各要素nums[i]に対して以下を行う：
 * 	- 補数（complement）を'target - nums[i]'で計算する
 *  - Mapにcomplementが存在するかを確認
 *   - 存在する場合:map.get(complemet)でインデックスを取得し、[そのインデックス、i]を返す
 *   - 存在しない場合:現在の値'nums[i]'をキー、インデックス'i'を値としてMapに保存する
 * 
 * 3. ループ終了までに条件が満たされなければ、[]
を返す
 * 
 */

export function twoSum(nums: number[], target: number): number[] {
	let map = new Map<number, number>();

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];
		if (map.has(complement)) {
			return [map.get(complement)!, i];
		} else {
			map.set(nums[i], i);
		}
	}
	return [];

}