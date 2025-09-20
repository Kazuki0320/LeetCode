// 例：[1,3,5]
export function reverseList(head: ListNode | null): ListNode | null {
	// すでに処理されたノード
	// 最初はnull
	let prev: ListNode | null = null
	// 現在のノード
	// 最初はhead
	let current: ListNode | null = head

	// currentの最後に到達するまでぶん回す
	while (current !== null) {
		// 1.最初に、current.nextをnextに退避させる
		// currentを先頭のみにする
		// next = 3→5→null
		// current = 1→3→5→null
		let next: ListNode | null = current.next

		// 2.currentが1なので、矢印を反転
		current.next = prev
		// current:1→null

		// 3.反転させた先頭を更新
		// この段階で、currentはnullを指している
		prev = current
		// prev:1→null

		// 4.未処理側のノードを現在ノードに更新
		current = next
		// curret:3→5→null
	}

	// 全て反転し終えたらprevが逆順となったリストになる
	return prev
}