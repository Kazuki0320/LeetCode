class Solution {
    fun isValid(s: String): Boolean {
        val bracketPairs = mapOf(
            ')' to '(',
            '}' to '{',
            ']' to '['
        )

        // スタックを使って括弧を管理
        val stack = mutableListOf<Char>()

        for (char in s) {
            if (char in bracketPairs.values) {
                // 開き括弧の場合、stackに追加
                stack.add(char)
            } else if (char in bracketPairs.keys) {
                // 閉じ括弧の場合、対応する開き括弧と比較
                if (stack.isEmpty() || stack.removeAt(stack.size - 1) != bracketPairs[char]) {
                    return false // 対応しない場合は無効
                }
            }
        }
        // スタックが空なら全て有効
        return stack.isEmpty()
    }
}


/*
【アプローチ】
・()と[]と{}これがtrue
 */
