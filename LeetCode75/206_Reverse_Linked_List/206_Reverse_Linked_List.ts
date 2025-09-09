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