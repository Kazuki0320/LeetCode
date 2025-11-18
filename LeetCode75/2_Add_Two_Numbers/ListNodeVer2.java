public class ListNodeVer2 {
	int val;
	ListNodeVer2 next;
	ListNodeVer2() {};
	ListNodeVer2(int val) { this.val = val; }
	ListNodeVer2(int val, ListNodeVer2 next) { this.val = val; this.next = next; }
}

class Solution {
	public ListNodeVer2 addTwoNumbers(ListNodeVer2 l1, ListNodeVer2 l2) {
		ListNodeVer2 dummy = new ListNodeVer2();
		ListNodeVer2 current = dummy;

		ListNodeVer2 p1 = l1;
		ListNodeVer2 p2 = l2;
		int carry = 0;

		while (p1 != null || p2 != null || carry != 0) {
			int x = (p1 != null) ? p1.val : 0;
			int y = (p2 != null) ? p2.val : 0;

			int sum = x + y + carry;
			carry = sum / 10;
			int digit = sum % 10;

			current.next = new ListNodeVer2(digit);
			current = current.next;

			if (p1 != null) p1 = p1.next;
			if (p2 != null) p2 = p2.next;
		}
		return dummy.next;
	}
}
