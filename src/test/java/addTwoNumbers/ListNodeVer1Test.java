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

	@Test
	void addTwoNumbers_basicCase() {
		Solution sol = new Solution();
		ListNodeVer1 l1 = new ListNodeVer1(2, new ListNodeVer1(4, new ListNodeVer1(3)));
		ListNodeVer1 l2 = new ListNodeVer1(5, new ListNodeVer1(6, new ListNodeVer1(4)));
		ListNodeVer1 result = sol.addTwoNumbers(l1, l2);
		int[] expected = new int[]{7, 0, 8};
		assertArrayEquals(expected, toArray(result));
	}
}