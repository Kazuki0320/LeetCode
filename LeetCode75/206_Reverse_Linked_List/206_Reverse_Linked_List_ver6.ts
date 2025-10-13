/**
 * 目的
 * 与えられた数値を逆順にする
 * 
 * 特徴
 * - 現在の値（current）と既に処理された値（prev）がキー
 * - 一時保存先となるnextが必要
 * - 現在の値のnextに、既に処理された値を追加すると逆順になる
 * 
 * 処理
 * - 現在の値を宣言
 * - 処理済みの値を宣言
 * - currentがnullになるまで処理を行う
 *  - nextに、current.nextを一時保存する
 *  - current.nextに、既に処理したprevを追加
 *  - 更新されたcurrentを既に処理されたprevとする
 *  - nextを次の現在地として追加
 *   - current = next
 * - curret: ListNode | null = null
 * - prev: ListNode | null = head
 * 
 * 最終的にどんな値が欲しい
 * 最初：[1,2]
 * 最後：[2,1]
 * このように反対になったリストが返ってきてほしい
 */

// head: [1,3,5]
export function reverseList(head: ListNode | null): ListNode | null {
	let prev: ListNode | null = null;
	let current: ListNode | null = head;

	while (current !== null) {
		// 一時的な退避
		// next = 3→5→null
		// current = 1→3→5
		const next = current.next;
		// current.nextに、既に処理した値を追加
		// current = 1→null
		current.next = prev;
		// 更新されたcurrentを既に処理されたprevに追加
		prev = current;
		// 先ほど退避させたnextを現在の値とする
		current = next;
	}
	return prev;
}
