class Solution {
    fun largestAltitude(gain: IntArray): Int {
        var current_altitude = 0
        var max_altitude = 0

        for (i in gain.indices) {
            current_altitude = current_altitude + gain[i]
            max_altitude = maxOf(max_altitude, current_altitude)
        }
        return max_altitude
    }
}

/*
【問題の理解】
この問題は、バイカーが標高の変化と元に、旅の途中で到達した最も高い標高を求める問題
・入力
- gain（配列）：各要素が2つのポイント間の標高差を表す
- 例：gain = [-5, 1, 5, 0, -7]は以下のように標高が変化する
    ポイント0からポイント1:-5
    ポイント1からポイント2:+1 ...
・出力
- バイカーが到達した標高の中での最高値
 */
