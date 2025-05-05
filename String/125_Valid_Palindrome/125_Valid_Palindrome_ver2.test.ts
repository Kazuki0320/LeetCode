import { isPalindrome} from './125_Valid_Palindrome_ver2';

describe('isPalindrome', () => {
	test('空文字のテスト', () => {
		const s = '';
		const result = isPalindrome(s);
		expect(result).toBe(true);
	});

	test('回文のテスト', () => {
		const s = "A man, a plan, a canal: Panama";
		const result = isPalindrome(s);
		expect(result).toBe(true);
	});

	test('非回文のテスト', () => {
		const s = "race a car";
		const result = isPalindrome(s);
		expect(result).toBe(false);
	});
});