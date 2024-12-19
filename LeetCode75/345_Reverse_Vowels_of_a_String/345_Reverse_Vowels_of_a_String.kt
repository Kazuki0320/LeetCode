class Solution {
    fun reverseVowels(s: String): String {
        val vowels = "aeiouAEIOU"
        val chars = s.toCharArray() // 文字列を文字配列に変換
        var left = 0
        var right = s.length - 1

        while (left < right) {
            // 左側の母音を探す
            while (left < right && chars[left] !in vowels) {
                left++
            }
            //　右側の母音を探す
            while (left < right && chars[right] !in vowels) {
                right--
            }

            // 母音が見つかった場合に入れ替える
            if (left < right) {
                val tmp = chars[left]
                chars[left] = chars[right]
                chars[right] = tmp

                // ポインタを進める
                left++
                right--
            }
        }
        //配列を文字列に戻して返す
        return String(chars)
    }
}

/*
・母音を反転させる
・２つしか現れない場合は、その２つの入れ替えを行う
・４つ以上の場合は、右と左それぞれ端から数えた時に同じ要素番になる文字列を入れ替える
・文字列からa,i,o,u,eにあたる文字を探し、一番小さい要素数と一番大きい要素数を求める
・求めた要素数の文字を入れ替える
・入れ替えた文字を出力
 */ 
