import static org.junit.jupiter.api.Assertions.assertArrayEquals;

import org.junit.jupiter.api.Test;

import twoSum.twoSum2;

public class twoSum2Test {
	@Test
	void twoSum_basicCase() {
		twoSum2 t = new twoSum2();
		int[] nums = {2,7,11,15};
		int target = 9;
		assertArrayEquals(new int[] { 0,1 }, t.twoSum(nums, target));
	}
}
