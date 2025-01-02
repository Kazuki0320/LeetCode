class Solution {
    fun asteroidCollision(asteroids: IntArray): IntArray {
        val result = mutableListOf<Int>()

        for (asteroid in asteroids) {
            var shouldAdd = true
            while (shouldAdd && asteroid < 0 && result.isNotEmpty() && result.last() > 0) {
                val top = result.last()
                if (top < -asteroid) {
                    // スタックの最後を削除して次を確認
                    result.removeAt(result.size - 1)
                } else if (top == -asteroid) {
                    // 両方とも消滅
                    result.removeAt(result.size - 1)
                    shouldAdd = false
                } else {
                    // 現在の小惑星が消滅
                    shouldAdd = false
                }
            }

            if (shouldAdd) {
                result.add(asteroid)
            }
        }

        return result.toIntArray()
    }
}


/*
【アプローチ】
・この問題では、小惑星同士の衝突をシュミレーションして、最終的に残っている小惑星を計算する。
・同じ方向の小惑星は衝突しない
・正の値と負の値が出会った場合のみ衝突が発生
　- 絶対値を比較して、大きい方が残る
・スタックを使用して管理するアプローチ
　- 右方向に進む小惑星スタックに保存し、左方向の小惑星が現れたら衝突をシュミレーションする

1. 配列の要素を絶対値に変換
    - 絶対値にする方法がわからない
2. ループ処理で、それぞれの要素を取得
3. もし、0より大きい場合
　　- 新しい配列Nに追加
   もし、0以下の場合
    - 前の値と比較して、大きい方が残る
    - addで追加
4. Nを返す

【処理の流れ】
1. 配列をループで処理
	- 配列 asteroids を1つずつ処理する。
	- 現在の小惑星を asteroid とする。
2. 衝突判定
	- 配列の要素が 0より小さい（左向き） かつ result の最後の要素が 0より大きい（右向き） 場合に、衝突処理を行う。
	- 条件：asteroid < 0 && result.last() > 0
3. while文で衝突を解決
	- 右向きと左向きの小惑星が衝突している間、以下の処理を繰り返す：
	1. スタックの最後の要素を取得:
		- result.last() を用いて、スタック（result）の最後の要素を取得。
	2. 現在の小惑星（asteroid）とスタック最後の小惑星の絶対値を比較:
		- もし、スタックの最後の小惑星が現在の小惑星の絶対値より小さい場合:
			- 現在の小惑星が勝つ。
			- スタックの最後を削除して、次のスタック要素と比較。
			- 処理: result.removeAt(result.size - 1)
		- もし、スタックの最後の小惑星が現在の小惑星の絶対値と等しい場合:
			- 両方の小惑星が消滅。
			- スタックの最後を削除。
			- 現在の小惑星も無効化し、shouldAdd = false に設定。
			- 処理: result.removeAt(result.size - 1)
			- break でwhile文を終了。
		- もし、スタックの最後の小惑星が現在の小惑星の絶対値より大きい場合:
			- 現在の小惑星が消滅。
			- 処理: shouldAdd = false
			- break でwhile文を終了。
4. 現在の小惑星をスタックに追加
	- 衝突処理後、shouldAdd が true の場合、現在の小惑星をスタックに追加。
		- 処理: result.add(asteroid)
5. 最終的な結果を返す
	- ループ終了後、スタック result を配列形式（IntArray）に変換して返す。
 */
