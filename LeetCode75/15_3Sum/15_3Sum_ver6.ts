function threeSum(nums: number[]): number[][] {
	const result: number[][] = [];
	const length = nums.length;

	nums.sort((a,b) => a-b);

	for (let i = 0; i < length - 2; i++) {
			if (i > 0 && nums[i] === nums[i-1]) continue;

			let l = i+1;
			let r = length-1;

			while (l < r) {
					let sum = nums[i] + nums[l] + nums[r];
					if (sum === 0) {
							result.push([nums[i], nums[l], nums[r]]);
							l++;
							r--;
							while (l < r && nums[l] === nums[l-1]) l++;
							while (l < r && nums[r] === nums[r-1]) r--;
					} else if (sum < 0) {
							l++;
					} else {
							r--;
					}
			}
	}

	return result;
}

/**
* 処理の流れ
* 1. 配列のソート
* 2. lengthから2を引いた値までループ
* 3. 右ポインタと左ポインタの宣言
* 4. l < rの間は処理を実行
* 5. nums[i] + nums[l] nums[r]の合計
* 6. 
* - sum === 0の場合の処理を実装
* - sum < 0の場合
*  - 0よりsumが小さい時は、左ポインタをずらす
* - それ以外の場合
*  - 0よりsumが大きい時は、右ポインタをずらす
* 7. 
* - resultに、nums[i],nums[l],nums[r]をpush
* - lとrをそれぞれ移動
* - 重複をスキップ
*/

/**
* 入力：整数配列 nums
* 出力：和が0になる「3つの要素の組み合わせ」
* 制約：
* - 同じ組み合わせは重複させない
* - 配列の長さはn
* 
* 
* 最初に考えること
* ・３重ループで全探索
*    - これは確実だが、遅い
* ・ソートを考える
*    - 重複は省けそう
*    - Two Pointerが使えそう
* ・「3Sum = 1つ固定 + 2Sum」に落とす発想
* 
* Two Pointers法の活用
* - ソート済みの配列なので、固定したiに対して：
*  ・ 左ポインタ l = i+1
*  ・ 右ポインタ r = n-1
* 和が大きければ右を左へ、小さければ左を右へ動かす
*/