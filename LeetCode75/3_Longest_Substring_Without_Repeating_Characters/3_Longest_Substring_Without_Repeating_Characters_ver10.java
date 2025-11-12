import java.util.Map;
import java.util.HashMap;

class longestSubstringWithoutRepeatingCharactersVer10 {
	public int lenghtOfLongestSubstring(String s) {
		Map<Character, Integer> map = new HashMap<>();
		int maxLen = 0, left = 0;

		for (int right = 0; right < s.length(); right++) {
		 char c = s.charAt(right);

		 if (map.containsKey(c) && left <= map.get(c)) {
			left = map.get(c) + 1;
		 }

		 map.put(c, right);

		 maxLen = Math.max(maxLen, right-left+1);
		}
		return maxLen;
	}
}