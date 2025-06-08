/**
 * 【手順】
 * 1. 配列の長さを取得して変数に格納する
 *  - これにより、ループ内で範囲'.length'を呼び出さずに、パフォーマンスがわずかに向上する
 * 
 * 2. 1つ目のループ（外側のループ）を作成する
 * 	- iを0から開始し、配列の最後の要素を手前まで繰り返す
 * 
 * 3. 2つ目のループ（内側のループ）を作成する
 *  - jをi+1から開始する（同じ要素を2回使わないため）
 *  - iより後ろの要素nums[j]と組み合わせて調べる
 * 
 * 4. 内側ループの中で、nums[i] + nums[j]がtargetと等しいかを比べる
 * 	- 等しい場合、i,jのペアが目的の組み合わせであるため、[i,j]を返す
 * 
 * 5. 全ての組み合わせを調べても一致しない場合
 *  - 空の配列[]を返す
 * 
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

