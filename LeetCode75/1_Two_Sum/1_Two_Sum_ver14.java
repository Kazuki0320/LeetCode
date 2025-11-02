import java.util.HashMap;
import java.util.Map;

/**
 * [2,7,11,15]
 * 目的
 * targetとなる値の要素数を出力する
 * 
 * 処理
 * mapを利用する
 * numsのlenghtまで、ループ処理
 * if文による条件分岐
 * - もし、mapに保存されていれば
 *  - mapに保存されているkeyと現在の要素数を返す
 * - もし、mapに保存されていない場合
 *  - mapに、keyとvalueを保存する
 *  - keyに何を保存するのか
 *   - 現在の要素
 *  - valueに何を保存するのか
 *   - その数値の要素数
 */

class Solution {
	public int[] twoSum(int[] nums, int target) {
		Map<Integer, Integer> map = new HashMap<>();

		for (var i = 0; i < nums.length; i++) {
			int current = nums[i];
			int comp = target-current;

			if (map.containsKey(comp)) {
				return new int[] { map.get(comp), i };
			} else {
				map.put(current, i);
			}
 		}
		return new int[0];
	}
}