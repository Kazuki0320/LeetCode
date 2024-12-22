class Solution {
    fun increasingTriplet(nums: IntArray): Boolean {
        var first = Int.MAX_VALUE // 最小値
        var second = Int.MAX_VALUE // 2番目に小さい値

        for (num in nums) {
            when {
                num <= first -> { 
                    // 最小値を更新
                    first = num
                }
                num <= second -> { 
                    // 2番目に小さい値を更新
                    second = num
                }
                else -> {
                    // 3つ目の値が見つかった
                    return true
                }
            }
        }

        // 条件を満たすトリプレットが見つからなかった場合
        return false
    }
}

