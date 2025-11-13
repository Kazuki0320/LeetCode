package addTwoNumbers;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;

class ListNodeVer1Test {
	int[] toArray(ListNodeVer1 node) {
		List<Integer> list = new ArrayList<>();
		while (node != null) {
			list.add(node.val);
			node = node.next;
		}
		return list.stream().mapToInt(i -> i).toArray();
	}

	@Test
	void addTwoNumbers_emptyCase() {
		Solution sol = new Solution();
		ListNodeVer1 result = sol.addTwoNumbers(null, null);
		assertArrayEquals(new int[]{}, toArray(result));
	}
}