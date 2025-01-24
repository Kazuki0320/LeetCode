/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
class Solution {
    fun deleteDuplicates(head: ListNode?): ListNode? {
        var current = head
        while (current != null && current.next != null) {
            if (current.`val` == current.next?.`val`) {
                // 値が重複している場合は次のノードをスキップ
                current.next = current.next?.next
            } else {
                // 重複していなければ次のノードへ進む
                current = current.next
            }
        }
        return head
    }
}
