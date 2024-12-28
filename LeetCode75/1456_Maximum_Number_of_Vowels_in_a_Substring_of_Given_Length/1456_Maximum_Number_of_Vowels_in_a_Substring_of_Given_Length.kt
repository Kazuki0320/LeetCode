class Solution {
    fun maxVowels(s: String, k: Int): Int {
        val charsToCount = setOf('a', 'i', 'u', 'e', 'o')
        var count = s.take(k).count { it in charsToCount }
        var maxCount = count //最大値を初期化
        
        // スライドウィンドウの処理
        for (i in k until s.length) {
            // ウィンドウから削除する文字
            val charToRemove = s[i - k]
            // ウィンドウに追加する文字
            val charToAdd = s[i]

            // 削除する文字が母音ならカウントを減らす
            if (charToRemove in charsToCount) count--
            // 追加する文字が母音ならカウントを増やす
            if (charToAdd in charsToCount) count++

            // 最大値を更新
            maxCount = maxOf(maxCount, count)
        }
        return maxCount
    }
}

/*
【動作説明】
1. `take(k)` で最初の部分文字列を取得し、母音をカウント。
2. `for` ループで文字列全体をスライドして次の部分文字列を検討。
3. 削除/追加される文字に基づいて母音カウントを更新。
4. 現在の母音カウントと最大値を比較して最大値を更新。
*/
