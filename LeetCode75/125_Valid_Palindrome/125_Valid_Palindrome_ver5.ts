export function isPalindrome(s:string) {
	const filtered = s
		.toLowerCase()
		.replace(/[^a-zA-Z0-9]/g, '');

	return filtered === filtered.split('').reverse().join('');
}

/**
 * 【この問題について】
 * 問題の概要：
 * この問題は、入力値である文字列を受け取りその文字を回文した時に同じ文字となるかを判定する
 * 
 * どんなことが必要：
 * ・ 大文字から小文字に変換するために、toLowerCaseを使用する
 * ・ 文字以外の文字列は使用しないので、除外する処理としてreplaceを使用
 * ・ 除外して整形した文字を一文字ずつ配列に変換
 * ・ それらの文字を一つにまとめる
 * ・ 変換処理した文字列と逆順にした文字列を比較して、ひとしければtrueを返す
 */