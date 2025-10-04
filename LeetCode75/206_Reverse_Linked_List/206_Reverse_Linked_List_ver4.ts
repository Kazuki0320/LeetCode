export function reverseList(head: ListNode | null): ListNode | null {
	/**
	 * 例：[1,3,5]
	 * 目的
	 * リストを逆順にする
	 * 
	 * 処理
	 * すでに処理したノードval
	 *  - null
	 * 現在のノードval
	 *  - 1→3→5→null
	 * 
	 * currentがnextになるまで、ループ処理
	 * - current.nextを退避←どこに？
	 * 	- もう一つ宣言したノード→退避用
	 *  - 退避val=next
	 *   -3→5→null
	 *   - current:1→3→5→null
	 * - すでに処理したノードvalの前回の処理の前に、今回のリストノードを更新
	 *  - current.nextに、すでに処理したノード（prev）を更新
	 * - 追加されたノードをすでに処理されたノードを更新
	 * - currentを次のリスト要素に移動
	 */

	let prev: ListNode | null = null;
	let current: ListNode | null = head;

	while(current !== null) {
		let next: ListNode | null = current.next;

		current.next = prev;

		prev = current;

		current = next;
	}
	return prev;
}