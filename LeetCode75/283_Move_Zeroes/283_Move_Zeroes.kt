class Solution {
    fun moveZeroes(nums: IntArray): Unit {
        // インデックスを保持しながら非ゼロの要素を前に移動
        var insertPos = 0
        for (num in nums) {
            if (num != 0) {
                nums[insertPos] = num
                insertPos++
            }
        }

        // 残りの位置を全て埋める
        for (i in insertPos until nums.size) {
            nums[i] = 0
        }
    }
}

/*
・与えられたnumsを、昇順に並べて0を末尾に配置
    - sote()を使用
・昇順に並び替えて、0が最初に来る
・0を取得して、それらを末尾に配置する
 */
