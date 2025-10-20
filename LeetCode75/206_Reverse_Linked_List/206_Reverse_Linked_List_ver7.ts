/**
 * 目的
 * 逆順にしたリストを返す
 * 
 * 処理
 * current
 * - 現在の値
 * - head
 * prev
 * - 既に処理した値
 * - null
 * next
 * - 一時的に退避させる値
 * - head.next
 * 
 * ３つの箱を利用して、headを逆順にする
 */

// head: [1,3,5]
export function reverseList(head: ListNode | null): ListNode | null {
	let prev: ListNode | null = null;
	let current: ListNode | null = head;

	while (current !== null) {
		const next = current.next;
		current.next = prev
		prev = current
		current = next
	}

	return prev;
}