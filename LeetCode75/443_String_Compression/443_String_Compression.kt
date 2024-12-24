class Solution {
    fun compress(chars: CharArray): Int {
        // CharArrayをリストに変換してグループ化
        val groupCounts = chars.toList()
            .groupBy { it }
            .mapValues { (_, values) -> values.size }

        // 結果を文字とそのカウントを組み合わせたリストに変換
        val compressedArray = groupCounts.flatMap { (char, count) ->
            if (count == 1) listOf(char)
            else listOf(char) + count.toString().toList()
        }

        // 元の配列 `chars` に結果を反映
        for (i in compressedArray.indices) {
            chars[i] = compressedArray[i]
        }

        println(compressedArray)
        return compressedArray.size
    }
}

