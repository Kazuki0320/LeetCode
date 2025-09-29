function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
	// list1:1→3→5→null
	// list2:2→4→6→null

	const dummy = new ListNode()
	let current = dummy

	while (list1 !== null && list2 !== null) {
		// list.val同士を比較して、小さい方を追加していくということ
		// 1.参照先を変える
		// 2.ポインタの操作
		// ポイント：dummyに対しては、操作する必要がない
		if (list1.val < list2.val) {
			current.next = list1;
			list1 = list1.next
		} else {
			current.next = list2
			list2 = list2.next
		}
		current = current.next
	}

	if (list1 !== null) {
		current.next = list1
	} else {
		current.next = list2
	}

	return dummy.next;
}