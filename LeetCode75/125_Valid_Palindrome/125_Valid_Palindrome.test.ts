import { isPalindrome } from "./125_Valid_Palindrome_ver5";

describe('isPalindrome', () => {
	test('基本的なケース', () => {
		const s = "A man, a plan, a canal: Panama";
		const result = isPalindrome(s);
		expect(result).toEqual(true);
	})
})