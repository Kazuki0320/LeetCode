class Solution {
    fun kidsWithCandies(candies: IntArray, extraCandies: Int): List<Boolean> {
        // candiesの最大値を求める
        val max_candie = candies.maxOrNull() ?: 0

        // 結果を格納するためのブール値のリスト
        val result = mutableListOf<Boolean>()

        // candeiesの各要素にextraCandiesを足して比較する
        for (candy in candies) {
            if (candy + extraCandies >= max_candie) {
                result.add(true)
            } else {
                result.add(false)
            }
        }
        return result
    }
}
// candiesの配列は、子供がすでに持っているキャンディの数
// extraCandiesは、自分が持っている余分なキャンディの数
// extraCandiesを与えたときに、すでに持っているキャンディよりも小さいもの false
// すでに持っているキャンディの数より大きいものはtrue

// ・output用の変数配列を宣言
// ・candiesの中での最大値を求める
// ・candiesをループ処理を行う
// ・candiesの各要素に、extraCandiesを足していく
// ・足したキャンディと最大値を比較
// →もし、小さい場合 false
// →もし、大きい場合　true
// ・Outputを出力
