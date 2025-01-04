class RecentCounter {
    private val requests = ArrayDeque<Int>() // キューとして機能するデータ構造

    fun ping(t: Int): Int {
        // 新しいリクエストを追加
        requests.addLast(t)

        // 範囲外のリクエストを削除
        while (requests.first() < t - 3000) {
            requests.removeFirst()
        }

        // 現在のキューのサイズを返す
        return requests.size
    }
}

