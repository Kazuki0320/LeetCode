// class ListNode{
// 	val: number
// 	next: ListNode | null
// 	constructor(val?: number, next?: ListNode | null) {
// 			this.val = (val === undefined? 0 : val)
// 			this.next = (next === undefined? null : next)
// 	}
// }

function mergedTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null{
	// リストを管理する役割を持つdummyが必要
	let dummy = new ListNode()
	// 現在の位置を示す
	let current = dummy

	/**
	 * 必要なもの
	 * ・ list1とlist2を比較したときの条件分岐
	 *  - list1.val < list2.val
	 *  - nextに、list1の値をセットする処理
	 *  - list1の現在地となるポインタにずらす処理
	 * 
	 * ・ まだ、list1,list2に値が残っている場合
	 *  - リストに追加
	 * 
	 * ・ dummy.nextを返す
	 */

	// list1とlist2がnullじゃない間はループ
	while (list1 !== null && list2 !== null) {
			if (list1.val < list2.val) {
					current.next = list1
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
	return dummy.next
}

// const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
// const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

// const mergedList = mergeTwoLists(list1, list2);