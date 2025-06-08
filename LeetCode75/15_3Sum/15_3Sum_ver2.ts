/**
 * 目的:与えられた整数配列numsから、合計が０になるような値を返す
 * 
 * 【手順書】
 * 1. 結果を格納する配列`result`を用意する
 * 
 * 2. 配列を昇順にソートする（2ポインターを使用するため）
 * 
 * 3. 配列をループ（インデックス、i）で先頭から末尾-2まで回す
 *  - nums[i]が同じ値と連続していたらスキップ（重複削除）
 *  - 以降、固定要素をnums[i]として、残りの2つを2ポインター法を用いて探索
 * 
 * 4. 2ポインター法を使う
 *  - `left = i+1`、`right = nums.length - 1`を初期化
 *  - 以下を条件にwhileループ：
 * 		 - 合計 sum = nums[i] + nums[left] + nums[right]
 *     - sum === 0 の場合：
 * 			 - 組み合わせを`result`に追加
 * 			 - 重複排除のため、left・rightを巣埋めつつ同じ値をスキップする
 * 		 - sum < 0の場合：left++（大きくする必要がある）
 *     - sum > 0の場合：right--(小さくする必要がある)
 * 
 * 5. ループ終了後、`result`を返す
 * 
 */


export function threeSum(nums: number[]): number[][] {
	let result: number[][] = [];

	nums.sort((a,b) => a - b); // 昇順ソート

	for (let i = 0; i < nums.length - 2; i++) {
		// 重複スキップ（同じ値を複数回固定にしない）
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		let left = i + 1;
		let right = nums.length - 1;

		while(left < right) {
			const sum = nums[i] + nums[left] + nums[right];
			if (sum === 0) {
				result.push([nums[i], nums[left], nums[right]]);

				// left/rightの重複をスキップ
				while (left < right && nums[left] === nums[left + 1]) left++;
				while (left < right && nums[right] === nums[right - 1]) right--;

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