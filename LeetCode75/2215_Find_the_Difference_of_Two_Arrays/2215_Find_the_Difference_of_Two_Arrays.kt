class Solution {
    fun findDifference(nums1: IntArray, nums2: IntArray): List<List<Int>> {
        // 重複を避けるためにセットを使用
        val nums1Set = nums1.toSet()
        val nums2Set = nums2.toSet()

        // nums1に存在し、nums2に存在しない要素を収集
        val nums1_result = nums1Set.filter { it !in nums2Set }
        // nums2に存在し、nums1に存在しない要素を収集
        val nums2_result = nums2Set.filter { it !in nums1Set }

        //　リスト形式で結果を返す
        return listOf(nums1_result, nums2_result)
    }
}

/*
【アプローチ】
・nums1の要素が、nums2の要素に存在するか走査
- nums1.indicesで、nums1の要素をループ
- nums1の要素と等しい値がnums2に存在するかを求める
- もし、等しい値がある場合、スルー
- もし、値が存在していない場合
　- 配列に格納
- nums2も同様に行う
・最終的な配列を出力
 */
