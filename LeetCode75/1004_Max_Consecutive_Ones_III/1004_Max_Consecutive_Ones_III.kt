class Solution {
    fun longestOnes(nums: IntArray, k: Int): Int {
        var left = 0 // 左ポインタ
        var maxCount = 0 // 最大の連続する1の長さ
        var remainingK = k // 反転可能な0の数

        // 右ポインタを配列全体でループ
        for (right in nums.indices) {
            if (nums[right] == 0) {
                remainingK-- // 0を反転
            }

            // kが負の場合、左端を縮小
            while (remainingK < 0) {
                if (nums[left] == 0) {
                    remainingK++ // 反転を戻す
                }
                left++ // 左ポインタを移動
            }

            // 最大のウィンドウサイズを更新
            maxCount = maxOf(maxCount, right - left + 1)
        }

        return maxCount
    }
}
