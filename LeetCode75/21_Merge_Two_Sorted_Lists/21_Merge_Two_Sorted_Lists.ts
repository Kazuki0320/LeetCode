class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // ダミーヘッドを作成（新しいリストの起点）
    let dummy = new ListNode();
    let current = dummy;

    // list1 と list2 の要素を比較しながらマージ
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1; // list1 のノードを追加
            list1 = list1.next;   // list1 を次に進める
        } else {
            current.next = list2; // list2 のノードを追加
            list2 = list2.next;   // list2 を次に進める
        }
        current = current.next; // マージしたノードへ進む
    }

    // 残りのノードを追加
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // ダミーヘッドの次が、新しいリストの先頭
    return dummy.next;
}


const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

const mergedList = mergeTwoLists(list1, list2);

console.log(mergedList);
