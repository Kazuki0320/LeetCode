class Solution {
    fun findMaxAverage(nums: IntArray, k: Int): Double {
        // 最初の部分配列の合計を計算
        var windowSum = nums.take(k).sum()
        var maxSum = windowSum

        // スライディングウィンドウで合計を計算
        for (i in k until nums.size) {
            windowSum += nums[i] - nums[i - k] //　新しい値を加え、古い値を更新
            maxSum = maxOf(maxSum, windowSum) //最大値を更新
        }
        // 最大の平均値を返す
        return maxSum.toDouble() / k
    }
}
