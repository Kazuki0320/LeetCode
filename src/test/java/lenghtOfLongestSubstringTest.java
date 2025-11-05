import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class lenghtOfLongestSubstringTest {
	
	@Test
	void lenghtOfLongestSubstring_basicCase() {
		Solution3 s = new Solution3();

		String str = "abcabcbb";
		assertEquals(3, s.lenghtOfLongestSubstring(str));
	}
	
	@Test
	void lenghtOfLongestSubstring_singleChar() {
		Solution3 s = new Solution3();

		String str = "bbbbb";
		assertEquals(1, s.lenghtOfLongestSubstring(str));
	}
	
	@Test
	void lenghtOfLongestSubstring_allUnique() {
		Solution3 s = new Solution3();

		String str = "pwwkew";
		assertEquals(3, s.lenghtOfLongestSubstring(str));
	}
}



