class Solution {
    fun gcdOfStrings(str1: String, str2: String): String {
        // 文字列を連結して比較、異なる場合は "" を返す
        if (str1 + str2 != str2 + str1) {
            return ""
        }
        // 文字列の長さの最大公約数を求める
        val gcdLength = gcd(str1.length, str2.length)
        // str1の先頭からGCD分の部分文字列を返す
        return str1.substring(0, gcdLength)
    }

    // ユークリッドの互除法で最大公約数を求める関数
    private fun gcd(a: Int, b: Int): Int {
        return if (b == 0) a else gcd(b, a % b)
    }
}

fun main() {
    val solution = Solution()
    val str1 = "ABCABC"
    val str2 = "ABC"

    // 結果を取得して表示
    val result = solution.gcdOfStrings(str1, str2)
    println("Input: str1 = \"$str1\", str2 = \"$str2\"")
    println("Output: \"$result\"")
}

