class Solution {
    fun maxOperations(nums: IntArray, k: Int): Int {
        nums.sort() 
        var left = 0
        var right = nums.size - 1
        var count = 0

        while (left < right) {
            val sum = nums[left] + nums[right]
            when {
                sum == k -> { 
                    count++
                    left++
                    right--
                }
                sum < k -> left++ //合計が小さい場合は左側を進める
                else -> right-- //合計が大きい場合は右側を下げる
            }
        }
        return count
    }
}
