class Solution {
    fun closeStrings(word1: String, word2: String): Boolean {
        // 長さの比較
        if (word1.length != word2.length) return false

        // 出現回数のカウント
        val count1 = word1.groupingBy { it }.eachCount()
        val count2 = word2.groupingBy { it }.eachCount()

        //　文字の集合が一致しているか
        if (count1.keys != count2.keys) return false

        // 出現回数の並びが一致しているか
        if (count1.values.sorted() != count2.values.sorted()) return false

        return true
    }
}

/*
【アプローチ】
・文字列の長さが異なる場合はfalseを返す
・各文字の出現回数をカウントする
・文字の種類（集合）が一致しているかを確認する
・文字の出現回数の並びが一致しているかを確認する
・条件を満たした場合にtrueを返す
 */
