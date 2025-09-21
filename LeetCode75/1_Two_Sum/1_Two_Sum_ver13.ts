export function twoSum(nums: number[], target: number): number[] {
	let numToIndex = new Map<number, number>()

	for (let i = 0; i < nums.length; i++) {
			const complement = target - nums[i]
			if (numToIndex.has(complement)) {
					return [numToIndex.get(complement) as number, i]
			} else {
					numToIndex.set(nums[i], i)
			}
	}
	return []
}

const nums = [3,2,4]
const target = 6
console.log("result", twoSum(nums, target))

/**
* やること
* - 補数を求める(target-nums[i])
* - 値→インデックスを保持するmapを宣言
* - HashMapの使用
*  - mapに補数が存在する場合
*      - その補数のインデックスと現在のiを返す
*  - mapに補数が存在しない場合
*      - 現在の数値とインデックスをMapに登録
* - 条件分岐による確認
* - for文で配列を走査して処理を繰り返す
* 
* keyとvalueにはそれぞれ何を格納する？
* key:配列の値（nums[i])
* value:その値が出現したインデックス
*/