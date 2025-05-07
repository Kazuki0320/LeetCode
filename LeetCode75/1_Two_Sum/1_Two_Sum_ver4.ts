export function twoSum(nums: number[], target:number): number[] {
	const seen = new Map<number, number>();

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];
		if (seen.has(complement)) {
			return [seen.get(complement)!, i];
		} else {
			seen.set(nums[i], i)
		}
	}
	return [];
}

/**
 * 【パターン1】
 * ・AとBを比較してゴリ押すパターン
 * 
 * <思考>
 * ・targetとnumsのAの要素を比較
 * ・比較した結果Cとループ処理したBが等しいかを確認
 * ・もし、等しい場合
 * 	- returnでresultを返す
 * ・等しくない場合
 * 	- 次の処理に進む
 * 
 * 【パターン2】
 * ・双方向ポインタを利用して、最初と最後から比較するパターン
 * 
 * 【パターン3】
 * ・補数となる値を見つけたら、それをMapで保存して補数と対になる値を探すパターン
 * 
 * <思考>
 * ・target - nums[i] = complement
 * ・complementをMapに保存
 * ・Mapの中にcomplementが存在するかを確認する
 *  - map.has(complement)
 * ・存在しない場合
 * 	- map.set(nums[i], i)
 * ・存在する場合
 *  - return [map.get(complement), i]
 * 
 * 
 */