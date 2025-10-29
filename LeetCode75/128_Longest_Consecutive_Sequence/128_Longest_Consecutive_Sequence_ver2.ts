export function longestConsecutive(nums: number[]): number {
		/**
	 * 配列の中身が連続している場合は、カウント
	 * 連続していない場合は、連続している部分までを返す
	 * 「連続」をしている状態を作るには？
	 * →sort
	 * 「　連続している」というのは、何と比較して連続していると判断するか？
	 * →一つ前の要素との比較
	 * →一つ前の要素を保持している変数も必要
	 * 「連続していること」をなんの条件で確認するか？
	 * →もし、前の値と現在の値が等しい場合
	 * 連続させるための条件が必要
	 * →numsのlengthが、nullになるまで
	 */

	let maxLen = 0;
	// 配列をSetに変換し、重複を削除する
	// 探索をO(1)で行えるようにする
	const numSet = new Set(nums);

	for (let num of nums) {
		if (!numSet.has(num-1)) {
			let currentNum = num;
			let currentStreak = 1;

			while (numSet.has(currentNum + 1)) {
				currentNum += 1;
				currentStreak += 1;
			}
			maxLen = Math.max(maxLen, currentStreak)
		}
	}
	return maxLen;
}