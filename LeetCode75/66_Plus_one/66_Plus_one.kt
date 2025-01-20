class Solution {
    fun plusOne(digits: IntArray): IntArray {
        for (i in digits.size - 1 downTo 0) {
            if (digits[i] < 9) {
                digits[i]++ // 現在の桁に1を加える
                return digits // 結果を返す
            }
            digits[i] = 0 // 現在の桁が9なら0にリセット
        }

        // 全ての桁が9の場合、新しい配列を作成
        val result = IntArray(digits.size + 1)
        result[0] = 1
        return result
    }
}
