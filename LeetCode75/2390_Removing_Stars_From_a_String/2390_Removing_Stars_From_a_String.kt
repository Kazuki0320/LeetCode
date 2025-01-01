class Solution {
    fun removeStars(s: String): String {
        var result = StringBuilder()

        for (i in 0 until s.length) {
            if (s[i] === '*') {
                if (result.isNotEmpty()) {
                    result.deleteCharAt(result.length - 1)
                }
            } else {
                result.append(s[i])
            }
        }
        return result.toString()
    }
}
/*
【アプローチ】
・*の前にある文字を削除する
・*を削除する
・最終的に出力される文字を返す
・*を見つける
・*の前の文字を指定
・*の前の文字は、新しく作成された箱に入らない

【ミニマム】
*を見つけ出して、それより1つ前の文字を削除すること
・全探索を行う
- ループ処理
    - for (i in s.length)
・*を見つける
- if文
    - if (i == '*')
    - iの一つ前の文字をresultの最後の文字から取得
        - resultの最後文字を取得
            - この取得の方法がわからない
        - それを削除
        - resultから最後の文字が消えて、新しいresultとなる
・*以外の文字列
- resultに結果を返す値を格納
・結果を返す
 */
