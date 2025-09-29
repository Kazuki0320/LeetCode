class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
			this.val = (val===undefined ? 0 : val)
			this.next = (next===undefined ? null : next)
	}
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
// list1:1→3→5→null
// list2:2→4→6→null
const dummy = new ListNode()
let current = dummy

while(list1 !== null && list2 !== null){
	if (list1.val < list2.val) {
		current.next = list1;
		list1 = list1.next;
	} else {
		current.next = list2;
		list2 = list2.next;
	}
	current = current.next;
}

if (list1 !== null) {
	current.next = list1
} else {
	current.next = list2
}

return dummy.next;
}
const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

console.log(mergeTwoLists(list1, list2));
