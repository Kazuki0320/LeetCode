function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
	// list1:1→3→5→null
	// list2:2→4→6→null
	const dummy = new ListNode()
	let current = dummy

	while(list1 !== null && list2 !== null){
		if (list1 <= list2) {
			current.next = list1;
			list1 = list1.next;
		} else {
			current.next = list1;
			list2 = list2.next;
		}
	}

	if (list1 !== null) {
		current.next = list1
	} else {
		current.next = list2
	}

	return dummy.next;
}