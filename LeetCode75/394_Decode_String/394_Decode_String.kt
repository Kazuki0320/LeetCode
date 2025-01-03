class Solution {
    fun decodeString(s: String): String {
        val stack = mutableListOf<String>()
        val countStack = mutableListOf<Int>()
        var currentString = ""
        var currentNum = 0

        for (char in s) {
            when {
                char.isDigit() -> {
                    // 数字を抽出して構築
                    currentNum = currentNum * 10 + (char - '0')
                }
                char == '[' -> {
                    // 現在の状態をスタックに保存
                    stack.add(currentString)
                    countStack.add(currentNum)
                    currentString = ""
                    currentNum = 0
                }
                char == ']' -> {
                    // 繰り返しを展開
                    val repeatTimes = countStack.removeAt(countStack.size - 1)
                    val previousString = stack.removeAt(stack.size - 1)
                    currentString = previousString + currentString.repeat(repeatTimes)
                }
                else -> {
                    // 文字を追加
                    currentString += char
                }
            }
        }
        return currentString


    }
}
