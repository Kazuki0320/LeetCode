import java.util.HashMap;
import java.util.Map;

class Solution3 {
	/**
	 * スライディングウィンドウ法
		left→部分文字列の始まる位置
		right→新しい文字を右から追加していく
		maxLen→最長文字列
		map→文字列の要素数と文字を保存

		1.初期化
		2.ループ開始
		3.同じ文字列がウィンドウ内にある場合
		4.現在の位置をmapに登録
		5.最大長の更新
		6.結果を返す

		1.初期化
		 - Map<Character, Integer> map = new HashMap<>();
		 - left:　現在のウィンドウの左端を示す
		 - maxLen: 最大の部分文字列を記録する
		   int left = 0, maxLen = 0;
		 
		2.ループ開始(right を0..s.length()-1で前進)
		 - 現在の文字char = s[right]を取り出す
		 - right: 右側に追加していく文字
		   char char = s.charAt(right); // 現在の文字を取得
		 
		3.同じ文字列が既にウィンドウ内にある場合
		 - if (map.containsKey(c) && left <= map.get(c)) {
		 		left = map.get(c) + 1; // 重複を避けるため左側を前進  
		 }

		4.現在の文字の位置をmapに登録
		 - map.put(char, rihgt);

		5.最大長の更新
		 - maxLen = Math.max(maxLen, right - left + 1);

		6.結果を返す
		 - ループが終わったらmaxLenを返す

	 */
	public int lenghtOfLongestSubstring(String s) {
		Map<Character, Integer> map = new HashMap<>();

		int left = 0, maxLen = 0;

		for (var right = 0; right < s.length(); right++) {
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