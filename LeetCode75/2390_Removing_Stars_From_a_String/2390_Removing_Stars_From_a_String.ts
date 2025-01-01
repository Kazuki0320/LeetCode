function removeStars(s: string): string {
	let result: string[] = [];
	
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '*') {
			// *が見つかった場合、結果配列から最後の文字を削除
			if (result.length > 0) {
				result.pop();
			}
		} else {
			// *以外の文字は結果配列に追加
			result.push(s[i]);
            console.log(result);
		}
	}
	
	// 配列を文字列に変換して返す
	return result.join('');
}

/**
【アプローチ】
*を見つけ出して、それより1つ前の文字を削除する
・宣言をする
・ループ処理をする
・if文で、*と等しい文字列を探索
    - もし、*である場合
        - その一つ前の文字を削除
    - もし、それ以外である場合
        - 新しい文字列resultに追加
・resultを返す
 */
