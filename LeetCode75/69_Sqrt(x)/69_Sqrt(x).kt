import kotlin.math.sqrt

class Solution {
    fun mySqrt(x: Int): Int {
        val result = sqrt(x.toDouble())
        return result.toInt()
    }
}
