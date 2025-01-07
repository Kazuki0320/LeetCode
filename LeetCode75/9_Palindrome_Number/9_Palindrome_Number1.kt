class Solution {
    fun isPalindrome(x: Int): Boolean {
        // 整数を文字列に変換
        val originalString = x.toString()
        // 文字列を逆順にする
        val reversedString = originalString.reversed()

        // 文字列を比較して回文かどうかを確認
        return originalString == reversedString
    }
}
