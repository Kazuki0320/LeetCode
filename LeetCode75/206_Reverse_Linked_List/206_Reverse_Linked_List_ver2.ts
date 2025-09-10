function reverseList(head: ListNode | null): ListNode | null {
	const dummy = new ListNode()

	while (head) {
		const node = head
		head = head.next
		node.next = dummy.next
		dummy.next = node
	}
	return dummy.next
}