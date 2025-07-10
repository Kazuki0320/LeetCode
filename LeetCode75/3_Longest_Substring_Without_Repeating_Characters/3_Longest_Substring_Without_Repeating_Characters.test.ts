import { lengthOfLongestSubstring } from "./3_Longest_Substring_Without_Repeating_Characters";

describe('Sliding Window', () => {
	test('異なる文字が連続する場合に3を返す', () => {
		const s = "abcabccbb";
		const result = lengthOfLongestSubstring(s);

		expect(result).toEqual(3);
	})

	test('連続する文字が1種類の場合に1を返す', () => {
		const s = "bbbb";
		const result = lengthOfLongestSubstring(s);

		expect(result).toEqual(1);
	})

	test('部分文字列が連続する場合に3を返す', () => {
		const s = "pwwkew";
		const result = lengthOfLongestSubstring(s);

		expect(result).toEqual(3);
	})
})