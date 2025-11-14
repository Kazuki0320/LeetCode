package addTwoNumbers;

/**
 * Definition for singly-linked list.
 */
public class ListNodeVer1 {
	int val;
	ListNodeVer1 next;
	ListNodeVer1() {}
	ListNodeVer1(int val) { this.val = val; }
	ListNodeVer1(int val, ListNodeVer1 next) { this.val = val; this.next = next; }
}

/**
 * 処理
 * リストの数値を逆順にするときは、関数を使うのはなくリストの入れ替えをする
 * - current
 * - head
 * - prev
 * 
 * Java構文:
 * ListNodeVer1 prev = null;
 * ListNodeVer1 currentL1 = l1;
 * ListNodeVer1 currentL2 = l2;
 */
class Solution {
	public ListNodeVer1 addTwoNumbers(ListNodeVer1 l1, ListNodeVer1 l2) {
		ListNodeVer1 dummyHead = new ListNodeVer1(0);
		ListNodeVer1 current = dummyHead;
		int carry = 0;

		// l1かl2のいずれかがnullではない、または繰り上がりがある可能性がある
		while (l1 != null || l2 != null || carry > 0) {
			int val1 = (l1 != null) ? l1.val : 0;
			int val2 = (l2 != null) ? l2.val : 0;

			int sum = val1 + val2 + carry;
			carry = sum / 10;
			int digit = sum % 10;

			current.next = new ListNodeVer1(digit);
			current = current.next;

			if (l1 != null) l1 = l1.next;
			if (l2 != null) l2 = l2.next;
		}
		
		return dummyHead.next;
	}
}

