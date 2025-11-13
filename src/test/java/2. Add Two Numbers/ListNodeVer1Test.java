import static org.junit.jupiter.api.Assertions.assertArrayEquals;

import org.junit.jupiter.api.Test;

class ListNodeVer1Test {
	void assertLinkedEquals(ListNodeVer1 expected, ListNodeVer1 actual) {
		ListNodeVer1 e = expected;
		ListNodeVer1 a = actual;

		while (e != null && a != null) {
			assertEquals(e.val, a.val, "ノードの値が一致しません");
			e = e.next;
			a = a.next;
		}

		// 長さが違う場合
		assertEquals(e, a, "連結リストの長さが一致しません");
	}
}