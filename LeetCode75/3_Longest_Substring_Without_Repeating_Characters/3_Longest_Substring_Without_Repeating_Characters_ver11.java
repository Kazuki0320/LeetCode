import java.util.HashMap;
import java.util.Map;

class longestSubstringWithoutRepeatingCharactersVer11 {
	public int lenghtOfLongestSubstring(String s) {
		int maxLen = 0, left = 0;
		Map<Character, Integer> map = new HashMap<>();

		for (int right = 0; right < s.length(); right++) {
			char c = s.charAt(right);

			if (map.containsKey(c) && left <= map.get(c)) {
				left = map.get(c) + 1;
			}

			map.put(c, right);

			// 右から左を引いた数にインデックスのズレの1分を足す
			maxLen = Math.max(maxLen, right - left + 1);
		}
		return maxLen;
	}
}