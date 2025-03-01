class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode) {
        this.val = (val===undefined ? 0: val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode
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

function printList(head: ListNode | null):void {
    let current = head
    let result = []
    while (current !== null) {
        result.push(current.val)
        current = current.next
    }
    console.log(result.join(" -> "))
}


const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));
// console.log(mergeTwoLists(list1, list2))
printList(mergeTwoLists(list1, list2));

/**
 * 【言語化】
1. **ダミーヘッドノードの作成**:
   - 新たに `ListNode` クラスのインスタンス `dummy` を生成します。これはマージ後の新しい連結リストの先頭を指す仮のノードとして機能します。

2. **現在のノードを指すポインタの初期化**:
   - `dummy` を指すポインタ `current` を作成します。これにより、新しいリストを構築する際に、現在の位置を追跡できます。

3. **`list1` と `list2` の両方が存在する間のループ処理**:
   - `list1` と `list2` の両方が `null` でない間、以下の処理を繰り返します。
     - `list1` の現在のノードの値と `list2` の現在のノードの値を比較します。
     - `list1` の値が `list2` の値より小さい場合:
       - `current.next` を `list1` に設定し、`list1` を次のノードに進めます。
     - それ以外の場合（`list2` の値が `list1` の値以下の場合）:
       - `current.next` を `list2` に設定し、`list2` を次のノードに進めます。
     - `current` を次のノードに進めます。

<ポイント>
・出現する変数は、3つのみ
    - list1
    - list2
    - current

4. **残りのノードの接続**:
   - ループが終了した時点で、`list1` または `list2` のいずれかがまだノードを持っている場合があります。片方のリストが他方より長い場合、その残りの部分を `current.next` に接続します。
     - `list1` が `null` でない場合、`current.next` を `list1` に設定します。
     - `list2` が `null` でない場合、`current.next` を `list2` に設定します。

5. **マージされたリストの返却**:
   - ダミーヘッドノード `dummy` の次のノード（`dummy.next`）を返します。これがマージされた新しい連結リストの先頭ノードとなります。
 */
