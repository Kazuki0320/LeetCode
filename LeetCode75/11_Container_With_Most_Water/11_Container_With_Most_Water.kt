class Solution {
    fun maxArea(height: IntArray): Int {
        var n = height.size
        var maxArea = 0

        for (i in 0 until n) {
            for (j in i+1 until n) {
                val width = j - i
                val minHeight = min(height[i], height[j])
                val area = width * minHeight

                // 最大面積を更新
                maxArea = maxOf(maxArea, area)
            }
        }
        return maxArea
    }
}

/*
【問題の理解】
・各要素は高さを示し、それぞれが垂直線を形成している
・２本の垂直線とx軸で囲まれる領域が水を保持するための「容器」となる
・面積（保持できる水の量）は次の公式となる
  面積 = 横の幅 × 最小高さ
・横幅: 2本の線の間の距離（インデックスの差）
・最小高さ: 2本の線のうち低い方の高さ
　height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
・こちらを与えられた場合
→各要素が垂直線の高さを表している
→配列のインデックスが垂直線の位置を表している

【アプローチ】
全ての組み合わせを試す「力任せの方法（Brute Force）」を考える
<力任せの方法>
・配列内の全てのペア（2本の垂直線）を調べて、最大の面積を計算する
・ペア（i, j）の面積を計算
面積 = (j - i) × min(height[i], height[j])
・全ての組み合わせについて計算し、最大値を更新する
・この方法だと、２重ループを使用するためO(n^2)となる

【最適化の考え】
２ポインタ法のアイディア
1. 左右から探索を開始
- 左端のポインタをleft = 0, 右端のポインタをright = height.size-1に置く
2. 面積を計算しつつポインタを動かす
- 現在の面積を計算
- 面積 = (j - i) × min(height[i], height[j])
3. 終了条件
- 左ポインタが右ポインタに追いつくまで処理を繰り返す

 */
