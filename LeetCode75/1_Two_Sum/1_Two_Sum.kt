class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {

        for (i in 0 until nums.size) {
            for (j in i + 1 until nums.size) {
                val sum = nums[i] + nums[j]
                if (sum == target) {
                    // 結果を格納し、配列に変換して返す
                    return intArrayOf(i, j)
                }
            }
        }
        // 値が見つからない場合
        return intArrayOf()
    }
}
