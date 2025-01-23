class Solution {
    fun climbStairs(n: Int): Int {
        if (n == 1) return 1
        if (n == 2) return 2

        var first = 1
        var second = 2

        for (i in 3..n) {
            val current = first + second
            first = second
            second = current
        }
        return second
    }
}
