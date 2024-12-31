class Solution {
    fun uniqueOccurrences(arr: IntArray): Boolean {
        // 出現回数をカウント
        val countMap = arr.toList().groupingBy { it }.eachCount()

        println(countMap)
        val occurences = countMap.values
        println(occurences)
        println(occurences.size)
        println(occurences.toSet().size)
        // 出現回数とリスト、そのリストをセットに変換したもののサイズを比較
        // セットに変換すると重複が削除されるため、サイズが一致しない場合は重複あり
        return occurences.size == occurences.toSet().size
        return true
    }
}

/*
【アプローチ】
・出現回数をカウント
・出現回数とリスト、そのリストをセットに変換したもののサイズを比較
- セットに変換すると重複が削除されるため、サイズが一致しない場合は重複あり
 */
