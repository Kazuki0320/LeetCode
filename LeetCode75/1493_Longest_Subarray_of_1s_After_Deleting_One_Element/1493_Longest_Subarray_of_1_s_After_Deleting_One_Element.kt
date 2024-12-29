class Solution {
    fun longestSubarray(nums: IntArray): Int {
        var left = 0
        var zeroCount = 0
        var maxLength = 0

        for (right in nums.indices) {
            // 右端の値が0なら、0の数をインクリメント
            if (nums[right] == 0) {
                zeroCount++
            }

            // 0の数が1を超えた場合、左端を進めることでウィンドウを縮小
            while (zeroCount > 1) {
                if (nums[left] == 0) {
                    zeroCount--
                }
                left++
            }

            // 現在のウィンドウの長さを計算
            // 1つの要素を削除しているので、'right - left'が結果
            maxLength = maxOf(maxLength, right - left)
        }
        return maxLength
    }
}

/*
【アプローチ】
・leftとrightを用いて、部分配列を追跡
・zeroCountを使って、現在のウィンドウ内の0の数をカウントする
・rightを進める
- nums[right] == 0の場合、zeroCountをインクリメントする
・条件に基づいて左端を調整
- zeroCount > 1の場合、leftを右に進め、zeroCountを減少させる
・ウィンドウ内の1の最大長を更新
- right - leftの結果をmaxLengthに更新
・出力
- 最大の1の連続部分配列の長さを返す
 */
