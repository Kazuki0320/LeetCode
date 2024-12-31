class Solution {
    fun equalPairs(grid: Array<IntArray>): Int {
        val n = grid.size
        val rowCount = mutableMapOf<List<Int>, Int>()

        // 行をタプル形式でカウント
        for (row in grid) {
            val rowList = row.toList()
            rowCount[rowList] = rowCount.getOrDefault(rowList, 0) + 1
        }

        var result = 0
        
        // 列をタプル形式で取得し、行のカウントを比較
        for (colIndex in 0 until n) {
            val colList = mutableListOf<Int>()
            for (rowIndex in 0 until n) {
                colList.add(grid[rowIndex][colIndex])
            }

            // 行リストと一致する列リストを探す
            result += rowCount.getOrDefault(colList, 0)
        }
        return result
    }
}

/*
【アプローチ】
・行のリストを取得
- gredの全ての行をリスト形式で保持する
・列のリストを取得
- 各列を抽出して、リストに変換する
・行リストと列リストを比較
- 各行と各列を比較し、等しいペアを見つける
- 各行を順に取り、列リストの各列と比較することで、等しいペアを探す
・ペアのカウント
 */
