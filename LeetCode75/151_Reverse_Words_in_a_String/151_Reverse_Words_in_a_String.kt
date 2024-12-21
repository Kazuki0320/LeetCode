class Solution {
    fun reverseWords(s: String): String {
        val array = s.trim().split("\\s+".toRegex())

        return array.reversed().joinToString(" ")
    }
}

/*
・与えられた文字を逆にして出力する問題
・文字との間には空白あり
・空白ごとに各要素として配列に格納する
・それらを逆順にして、出力
 */
