class Solution {
    fun productExceptSelf(nums: IntArray): IntArray {
        val n = nums.size
        val answer = IntArray(n)
        
        var leftProduct = 1
        // 左から右への累積積
        for (i in nums.indices) {
            answer[i] = leftProduct
            println(answer[i])
            leftProduct *= nums[i]
            println("左積処理中 (i=$i): leftProduct=$leftProduct, answer=${answer.toList()}")
        }

        var rightProduct = 1
        // 右から左への累積積
        for (i in nums.indices.reversed()){
            answer[i] *= rightProduct
            println(answer[i])
            rightProduct *= nums[i]
            println("右積処理中 (i=$i): rightProduct=$rightProduct, answer=${answer.toList()}")
        }
        return answer
    }
}
