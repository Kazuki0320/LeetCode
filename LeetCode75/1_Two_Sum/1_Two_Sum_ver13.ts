export function twoSum(nums: number[], target: number): number[] {
	let map = new Map<number, number>()

	for (let i = 0; i < nums.length; i++) {
			const complement = target - nums[i]
			if (map.has(complement)) {
					return [map.get(complement)!, i]
			} else {
					map.set(nums[i], i)
			}
	}
	return []
}

const nums = [3,2,4]
const target = 6
console.log("result", twoSum(nums, target))

/**
* やること
* - 補数を求める
* - HashMapを使用するための変数を宣言
* - HashMapの使用
*  - mapが補数を持っている場合
*      - 補数である数値の要素数を返す
*  - mapが補数を持っていない場合
*      - mapで、値を持っている変数に追加
* - 条件分岐による確認
* - while文でのループ処理
* 
* keyとvalueにはそれぞれ何を格納する？
* key:値
* value:値の要素
*/