/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// パターンA(3ポインタ式)
export function reverseList(head: ListNode | null): ListNode | null {
	// 反転済みの先頭を指すポインタ。最初は何もないのでnull
	let prev: ListNode | null = null
	// これから処理する未反転側の先頭。最初はheadから始める
	let current: ListNode | null = head

	// 未処理が残っている間ループ
	while (current !== null) {
			// 1.退路の確保：次へ進むために、現在の"nextノード"を一時保存
			const next: ListNode | null = current.next
			// next:3→5→null
			// current:1

			// 2.矢印を反転：現在ノードのnextを反転済みの先頭（prev）へ向ける
			current.next = prev
			// current:1→null

			// 3.反転済みの先頭を更新：現在のノードが反転済みの新しい先頭になる
			// この段階だとprevは、nullを指している
			prev = current
			// prev:1→null

			// 4.未処理側を前進：さっき退避させたnextに進む
			current = next
			// current:3→5→null
	}
	// 全て反転し終わると、prevが新しいリストになる
	return prev
};

// パターンB(先頭挿入式)
class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
			this.val = (val === undefined ? 0 : val)
			this.next = (next === undefined ? null : next)
	}
}

function reverseList(head: ListNode | null): ListNode | null {
const dummy = new ListNode() // dummy.next が反転済みの先頭
while (head) {
	const node = head          // 1個抜き取る
	head = head.next           // 未処理側を前進
	node.next = dummy.next     // 反転済みの先頭の前に差し込む
	dummy.next = node
}
return dummy.next
}

const head = new ListNode(1, new ListNode(3, new ListNode(5)));
console.log(reverseList(head))