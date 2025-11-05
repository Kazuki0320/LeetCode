class Solution {
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
		 - maps: 各文字の最新の出現位置（index）を保持する
		 - left:　現在のウィンドウの左端を示す
		 - maxLen: 最大の部分文字列を記録する

		2.ループ開始
		 - 現在の文字char = s[right]を取り出す
		 - right: 右側に追加していく文字

		3.同じ文字列が既にウィンドウ内にある場合
		 - map.has(char) && left <= map.get(char)

		4.現在の文字の位置をmapに登録
		 - map.set(char, right)

		5.最大長の更新
		 - right-left+1で現在のウィンドウ長を算出

		6.結果を返す
		 - ループが終わったらmaxLenを返す
	 */
	public int lenghtOfLongestSubstring(String s) {

	}
}