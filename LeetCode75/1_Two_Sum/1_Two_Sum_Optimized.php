class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        // 値を保持する連想配列
        $map = [];

        foreach($nums as $i => $num) {
            // terget - 現在の値がすでに配列に存在するかを確認
            $complement = $target - $num;
            if (array_key_exists($complement, $map)) {
                // 見つかった場合、そのインデックスを返す
                return [$map[$complement], $i];
            }

            // 値とそのインデックスを連想配列に追加
            $map[$num] = $i;
        }
        // 見つからない場合は空配列を返す
        return [];
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
    - ハッシュマップを使用することで、O(n^2)の時間計算量をO(n)とすることができる
    - 探索時間を削減し、target - nums[i]がすでに存在しているかを確認する
 */
