class Solution {
    fun romanToInt(s: String): Int {
        // ローマ数字とその値のマッピングを定義
        val romanToIntMap = mapOf(
            'I' to 1,
            'V' to 5,
            'X' to 10,
            'L' to 50,
            'C' to 100,
            'D' to 500,
            'M' to 1000
        )

        var result = 0
        var prevValue = 0

        // 文字列を1文字ずつ処理
        for (char in s) {
            val currentValue = romanToIntMap[char] ?: 0

            // 現在の値が前回の値より大きい場合は減算ルールを適用
            if (currentValue > prevValue) {
                result += currentValue - 2 * prevValue
            } else {
                result += currentValue
            }

            // 現在の値を前回値として保持
            prevValue = currentValue
        }

        return result
    }
}

