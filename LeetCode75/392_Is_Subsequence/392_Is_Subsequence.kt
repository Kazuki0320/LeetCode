class Solution {
    fun isSubsequence(s: String, t: String): Boolean {
        var sIndex = 0
        var tIndex = 0

        // 両方の文字列を走査
        while (sIndex < s.length && tIndex < t.length) {
            if (s[sIndex] == t[tIndex]) {
                sIndex++ // sのポインタを進める
            }
            tIndex++ // tのポインタは常に進める
        }

        // sの全ての文字列が確認できた場合、sIndex == s.lengthとなる
        return sIndex == s.length
    }
}
/*
・sがtの部分文字列であるかどうかを判定する問題
・両方の文字列を順番に走査
・sの現在の文字とtの現在の文字が一致する場合
→sのポインタを進める
・tのポインタは常に進める
・sの全ての文字が確認できた場合、sIndex == s.lengthとなる
 */
