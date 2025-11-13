package longestSubstringWithoutRepeationgCharacters;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

/**
 * LongestSubstring問題の統一テストクラス
 * 新しいバージョンを追加する際は、このファイルにテストメソッドを追加してください
 */
public class LongestSubstringTest {
	
	@Test
	void lenghtOfLongestSubstring() {
		LongestSubstringVer7 solution = new LongestSubstringVer7();
		String str = "abcabcbb";
		assertEquals(3, solution.lenghtOfLongestSubstring(str));
	}

	@Test
	void testVer7_singleChar() {
		LongestSubstringVer7 solution = new LongestSubstringVer7();
		String str = "bbbb";
		assertEquals(1, solution.lenghtOfLongestSubstring(str));
	}

	@Test
	void testVer7_allUnique() {
		LongestSubstringVer7 solution = new LongestSubstringVer7();
		String str = "pwwkew";
		assertEquals(3, solution.lenghtOfLongestSubstring(str));
	}
}
