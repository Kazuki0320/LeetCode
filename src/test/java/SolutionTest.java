import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import org.junit.jupiter.api.Test;

// デフォルトパッケージの Solution をそのまま参照
class SolutionTest {

    @Test
    void twoSum_basicCase() {
        Solution s = new Solution();        
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        assertArrayEquals(new int[] {0, 1}, s.twoSum(nums, target));
    }
}


