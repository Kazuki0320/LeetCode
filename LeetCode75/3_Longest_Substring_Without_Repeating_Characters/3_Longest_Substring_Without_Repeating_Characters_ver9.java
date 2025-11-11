import java.util.HashMap;
import java.util.Map;

class longestSubstringWithoutRepeatingCharactersVer9 {
	public int lenghtOfLongestSubstring(String s) {
		Map<Character, Integer> map = new HashMap<>();
		int maxLen = 0, left = 0;

		for (int right = 0; right < s.length(); right++) {
			char c = s.charAt(right);

			// 現在の文字が既にウィンドウ内に存在する場合、leftを重複文字の次の位置に移動
			if (map.containsKey(c) && left <= map.get(c)) {
				left = map.get(c) + 1;
			}

			map.put(c, right);

			// 右から左を引いた数にインデックスのズレの1分を足す
			maxLen = Math.max(maxLen, right-left+1);
		}
		return maxLen;
	}
}