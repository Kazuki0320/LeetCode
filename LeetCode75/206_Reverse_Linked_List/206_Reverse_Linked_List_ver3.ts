export function reverseList(head: ListNode | null): ListNode | null {
	// 反転済みの先頭を指すポインタ
	// 最初は何もないので、null
	let prev: ListNode | null = null
	// これから処理する未反転側の先頭
	// 最初は、headから始める
	let current: ListNode | null = head

	while (current !== null) {
		// 1.退避の確保:次へ進むために、現在のnextノードを一時保存
		const next: ListNode | null = current.next

		// 2.矢印を反転:現在ノードのnextを反転済みの先頭（prev）へ向ける
		current.next = prev

		// 3.反転済みの先頭を更新：現在ノードが反転済みの新しい先頭になる
		prev = current

		// 4.未処理側を前進：さっき退避させたnextに進む
		current = next
	}
}