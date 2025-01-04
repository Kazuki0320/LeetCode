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
    fun deleteMiddle(head: ListNode?): ListNode? {
        // ベースケース: リストが1つしかない場合はnullを返す
        if (head == null || head.next == null) return null

        var slow = head
        var fast = head
        var prev: ListNode? = null

        // fast がリストの末尾に到達するまで進める
        while (fast != null && fast.next != null) {
            prev = slow // slowの直前ノードを記録
            slow = slow?.next // slowを1ステップ進める
            fast = fast.next?.next // fastを2ステップ進める
        }

        // 中央ノード (slow) を削除する
        prev?.next = slow?.next

        return head
    }
}
