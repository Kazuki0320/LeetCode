export function isPalindrome(s: string): boolean {
	const filtered = s
		.toLowerCase()
		.replace(/[^a-zA-Z0-9]/g, '')
		.split('')
		.join('');

	return filtered === filtered.split('').reverse().join('');
}