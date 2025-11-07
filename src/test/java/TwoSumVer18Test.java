import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import twoSum.TwoSumVer18;

public class TwoSumVer18Test {
	@Test
	void twoSum_basicCase() {
		TwoSumVer18 s = new TwoSumVer18();
		int[] nums = {2,7,11,15};
		int target = 9;
		assertArrayEquals(new int[] { 0, 1}, s.twoSum(nums, target));
	}
}