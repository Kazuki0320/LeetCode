class Solution {
    fun longestCommonPrefix(strs: Array<String>): String {
        if (strs.isEmpty()) return ""

        for (i in strs[0].indices) {
            val char = strs[0][i]
            for (str in strs) {
                if (i >= str.length || str[i] != char) {
                    return strs[0].substring(0, i)
                }
            }
        }
        return strs[0]
    }
}

/*
【アプローチ】
垂直スキャン法
1. 配列の最初の文字列"flower"を基準に、1文字ずつ他の文字列と比較をする。
2. 比較中に最初に不一致が見つかった場合、そのインデックスまでの部分文字列を返す
 */
