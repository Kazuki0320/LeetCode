function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
	/**
	 * 必要なもの
	 * - dummyで、先頭の要素を揃えたものを用意
	 * - 現在地が必要
	 * - list1とlist2を比較して、どちらが大きいかを判定
	 * - lsit1がnullじゃない かつ list2がnullじゃない場合はループ処理
	 */
	// 再代入しないのでconstが適切
	let dummy = new ListNode()
	let current = dummy

	while (list1 !== null && list2 !== null) {
		// こうすると同値は list1 優先になり、入力順の安定性が上がります。
		if (list1.val <= list2.val) {
			// 小さいvalを持つlistをdummyに追加していく
			// 2つやることがある
			// 1.参照先を変える
			// 2.ポインタの操作
			// ポイント：dummyに対しては、操作をしない
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


// 入力値
// list1: [1] -> [3] -> [5]
// list2: [2] -> [4] -> [6]