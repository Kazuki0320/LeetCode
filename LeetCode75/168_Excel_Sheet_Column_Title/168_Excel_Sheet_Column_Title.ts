function convertToTitle(columnNumber: number): string {
    let result = "";

    while (columnNumber > 0) {
        columnNumber--; // 1-based index → 0-based index に調整
        let remainder = columnNumber % 26; // 26進数の桁の取得
        result = String.fromCharCode(65 + remainder) + result; // 'A' = 65
        columnNumber = Math.floor(columnNumber / 26); // 次の桁へ
    }

    return result;
}
