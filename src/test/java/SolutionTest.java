import static org.junit.jupiter.api.Assertions.assertArrayEquals;

import org.junit.jupiter.api.Test;

// デフォルトパッケージの Solution1 (ver15) をそのまま参照
class SolutionTest {

    @Test
    void twoSum_basicCase() {
        Solution1 s = new Solution1();
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        assertArrayEquals(new int[] {0, 1}, s.twoSum(nums, target));
    }
}


