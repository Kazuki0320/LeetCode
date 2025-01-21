class Solution {
    fun addBinary(a: String, b: String): String {
        val numA = a.toBigInteger(2)
        val numB = b.toBigInteger(2)
        val sum = numA + numB

        //結果を出力
        return sum.toString(2)
    }
}
