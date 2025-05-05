export function isPalindrome(s: string): boolean {
	if (!s) return true;
	const sanitizedStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

	for (let i = 0; i < sanitizedStr.length / 2; i++) {
		if (sanitizedStr[i] !== sanitizedStr[sanitizedStr.length - 1 - i]) {
			return false;
		}
	}
	return true;
}