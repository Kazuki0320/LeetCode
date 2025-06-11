export function isPalindrome(s: string): boolean {
	// 空白を削除する
	// 大文字を小文字にする
	const filtered = s
		.toLowerCase()
		.replace(/[^a-zA-Z0-9]/g, '')
		.split('')
		.join('');

	return filtered === filtered.split('').reverse().join('');
}
