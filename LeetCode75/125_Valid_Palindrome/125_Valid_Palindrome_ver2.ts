export function isPalindrome(s: string) {
	const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	const len = cleaned.length;

	for (let i = 0; i < len / 2; i++) {
		if (cleaned[i] !== cleaned[len - i - 1]) {
			return false;
		}
	}
	return true;
}