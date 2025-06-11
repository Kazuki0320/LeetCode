export function isPalindrome(s: string) {
	s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	const len = s.length;

	for (let i = 0; i < len / 2; i++) {
		if (s[i] !== s[len - i - 1]) {
			return false;
		}
	}
	return true;
}