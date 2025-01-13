class Solution {
    fun removeDuplicates(nums: IntArray): Int {
        if (nums.isEmpty()) return 0

        var k = 0

        for (i in nums.indices) {
            if (i == 0 || nums[i] != nums[k - 1]) {
                nums[k] = nums[i]
                k++
            }
        }
        return k
    }
}

/*
[アプローチ]
・重複している要素を1つにして、配列の要素数は入力値と同じにする
・配列の要素で、重複している要素を1つにする
 */
