package longestSubstringWithoutRepeationgCharacters;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import longestSubstringWithoutRepeationgCharacters.LongestSubstringVer8;

@SuppressWarnings("unused")
public class LongestSubstringWithoutRepeatingCharactersVer8Test {

	@Test
	void lenghtOfLongestSubstring() {
		LongestSubstringVer8 solution = new LongestSubstringVer8();
		String str = "abcabcbb";
		assertEquals(3, solution.lenghtOfLongestSubstring(str));
	}
}
