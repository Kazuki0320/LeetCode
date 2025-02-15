/**
 【実装】
 ・ListNodeをインスタンス化して、新しいリストを作成
 ・インスタンス化したListNodeを現在のポインタとする
 ・list1とlist2がnullではない間ループ処理
    - もし、list1がlist2より小さい場合
        - dummyオブジェクトにlist1を追加
        - list1のポインタを次に進める
    - それ以外の場合
        - dummyオブジェクトにlist2を追加
        - list2のポインタを次に進める
    - マージした値に現在地を進める
・残りノードを追加
    - list1の残りを追加
    - list2の残りを追加
・dummyヘッドの次のポインタを返す
 * 
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null , list2: ListNode | null ): ListNode | null  {
    let dummy = new ListNode()
    let current = dummy

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
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

const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

const mergedList = mergeTwoLists(list1, list2);

console.log(mergedList);
