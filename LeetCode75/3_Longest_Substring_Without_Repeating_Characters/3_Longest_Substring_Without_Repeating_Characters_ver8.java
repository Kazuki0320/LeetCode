import java.util.HashMap;
import java.util.Map;

/**
 * 入力値：s = "abcabcbb"
 * 出力値：3
 * 
 * left：部分文字列が始まる位置
 * right:新しい文字を追加していく
 * maxLen:文字列の最長長さ
 * map：文字と文字列の要素数
 * 
 * 1.初期化
 *  - left
 *  - right
 *  - maxLen
 *  - c→sのそれぞれの文字（charAt)
 * 2.ループ開始
 * 3.同じ文字列がウィンドウ内にある場合
 * 4.現在の位置をmapに登録
 * 5.最大長の更新
 * 6.結果を返す
 */
class longestSubstringWithoutRepeatingCharactersVer8 {
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

			maxLen = Math.max(maxLen, right-left+1);
		}
		return maxLen;
	}
}