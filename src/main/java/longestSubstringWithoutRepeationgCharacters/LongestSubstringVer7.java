package longestSubstringWithoutRepeationgCharacters;

import java.util.HashMap;
import java.util.Map;

public class LongestSubstringVer7 {
	/**
	 * スライディングウィンドウ法
	 * left→部分文字列の始まる位置
	 * right→新しい文字を右から追加していく
	 * maxLen→最長文字列
	 * map→文字列の要素数と文字を保存
	 * 
	 * 1.初期化
	 * 2.ループ開始
	 * 3.同じ文字列がウィンドウ内にある場合
	 * 4.現在の位置をmapに登録
	 * 5.最大長の更新
	 * 6.結果を返す
	 */
	public int lenghtOfLongestSubstring(String s) {
		Map<Character, Integer> map = new HashMap<>();

		int left = 0, maxLen = 0;

		for (var right = 0; right < s.length(); right++) {
			char c = s.charAt(right);

			// 現在の文字が既にウィンドウ内に存在する場合、leftを重複文字の次の位置に移動
			// 重複した文字を発見したら、ウィンドウが右側にずれていくイメージ
			if (map.containsKey(c) && left <= map.get(c)) {
				left = map.get(c) + 1;
			}
			map.put(c, right);

			maxLen = Math.max(maxLen, right-left+1);
		}
		return maxLen;
	}
}