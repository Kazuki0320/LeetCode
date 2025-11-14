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
        // ダミーノード（結果リストの先頭の一つ前）
        ListNodeVer1 dummy = new ListNodeVer1(0);
        ListNodeVer1 current = dummy;

        ListNodeVer1 p1 = l1;
        ListNodeVer1 p2 = l2;
        int carry = 0;

        while (p1 != null || p2 != null || carry != 0) {
            int x = (p1 != null) ? p1.val : 0;
            int y = (p2 != null) ? p2.val : 0;

            int sum = x + y + carry;
            carry = sum / 10;      // 繰り上がり
            int digit = sum % 10;  // 今の桁の値

            current.next = new ListNodeVer1(digit);
            current = current.next;

            if (p1 != null) p1 = p1.next;
            if (p2 != null) p2 = p2.next;
        }

        return dummy.next;
    }
}


