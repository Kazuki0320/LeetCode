class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        for ($i = 0; $i < count($nums); $i++) {
            for ($j = $i + 1; $j < count($nums); $j++) {
                $sum = $nums[$i] + $nums[$j];
                if ($sum == $target) {
                    return [$i, $j];
                }
            }
        }
    }
}

/**【アプローチ】
・ポインタAとポインタBを使って、合計値がtargetと等しいかを確認する
    - 外側のループA: 0から nums.size
    - 内側のループB: A+1からnums.size
    - 合計値 sum = nums[i] + nums[j]を計算
・条件を比較
    - if (sum == target) の条件で比較し、等しい場合はインデックスを返す
・結果を返す
    - 最初に見つかったペアのインデックスを配列として返す
【リファクタリングポイント】
・ループを1つにして、走査することができないか
 */
