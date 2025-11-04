import java.util.HashMap;
import java.util.Map;

class Solution {
	public int[] twoSum(int[] nums, int target) {
		Map<Integer, Integer> map = new HashMap<>();

		for (var i = 0; i < nums.length; i++) {
			var current = nums[i];
			var comp = target - current;

			if (map.containsKey(comp)) {
				return new int[] { map.get(comp), i };
			} else {
				map.put(comp, i);
			}
		}
		return new int[0];
	}
}