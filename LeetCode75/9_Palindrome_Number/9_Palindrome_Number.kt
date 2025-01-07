class Solution {
    fun isPalindrome(x: Int): Boolean {
        val originalString = x.toString()
        var reverse = originalString.reversed()
        for (i in 0 until originalString.length) {
            if (originalString[i] != reverse[i]) {
                return false
            }
        }
        return true
    }
}

/*
[アプローチ]
・元の文字列と後ろの文字列が等しいかを確認
・入力値は整数
    - 与えられた入力値を文字列に変換
・元の文字列
・逆にした文字列の比較
・もし、文字列が等しくなかった場合
    - return false
・もし、文字列が全て等しかった場合
    - return true
 */
