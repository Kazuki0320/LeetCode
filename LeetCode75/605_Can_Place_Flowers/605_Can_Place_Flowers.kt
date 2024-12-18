class Solution {
    fun canPlaceFlowers(flowerbed: IntArray, n: Int): Boolean {
        var count = 0 // 植えられた花の数
        val size = flowerbed.size
        
        for (i in flowerbed.indices) {
            if (flowerbed[i] == 0) {
                // 左の要素が範囲外または0、右の要素が範囲外または0
                val prev = if (i == 0) 0 else flowerbed[i - 1]
                val next = if (i == size - 1) 0 else flowerbed[i + 1]
                
                if (prev == 0 && next == 0) {
                    flowerbed[i] = 1 // 花を植える
                    count++ // 植えた数をカウント
                    if (count >= n) {
                        return true // 必要な数に達したら終了
                    }
                }
            }
        }
        return count >= n // 最終的に植えられた数がn以上かどうか
    }
}

// 使用例
fun main() {
    val solution = Solution()
    println(solution.canPlaceFlowers(intArrayOf(1, 0, 0, 0, 1), 1)) // true
    println(solution.canPlaceFlowers(intArrayOf(1, 0, 0, 0, 1), 2)) // false
    println(solution.canPlaceFlowers(intArrayOf(0, 0, 1, 0, 0), 1)) // true
}

