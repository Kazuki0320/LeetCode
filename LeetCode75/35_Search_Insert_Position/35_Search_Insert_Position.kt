class Solution {
    fun searchInsert(nums: IntArray, target: Int): Int {
        val result = nums.indexOf(target)
        if (result != -1) {
            return result
        }

        // ターゲットが見つからない場合、挿入位置を見つける
        for (i in nums.indices) {
            if(nums[i] > target) {
                return i
            }
        }

        return nums.size
    }
}
