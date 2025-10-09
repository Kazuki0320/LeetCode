export function reverseList(head: ListNode | null): ListNode | null {
	/**
	 * 例 [1,3,5]
	 * 
	 * 目的
	 * リストを逆順にする
	 * 
	 * 処理
	 * すでに処理したノード
	 * - null
	 * 現在のノード
	 * - head
	 * 
	 * currentがnullになるまでループ処理
	 * - current.nextを退避
	 *  - current.next以降がnextに追加される
	 *  - next = 3→5→null
	 *  - current = 1→3→5
	 * - 退避用のnext
	 * - すでに処理したノードの前に、今回のリストノードを追加
	 *  - current.nextに、既に処理したノードを更新
	 * - 追加されたノードを既に処理されたノードに更新
	 * - currentを次のリストに進める
	 */

	let prev: ListNode | null = null;
	let current: ListNode | null = head;

	while (current !== null) {
		let next: ListNode | null = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}
	return prev;
}