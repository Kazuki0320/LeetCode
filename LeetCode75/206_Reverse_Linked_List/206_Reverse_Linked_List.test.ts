import { reverseList } from './206_Reverse_Linked_List'

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// LinkedListを配列に変換するヘルパー関数
function linkedListToArray(head: ListNode | null): number[] {
    const result: number[] = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// 配列をLinkedListに変換するヘルパー関数
function arrayToLinkedList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    
    const head = new ListNode(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    
    return head;
}

describe('reverseListTest', () => {
    test('テストケース1: [1,2,3]を反転して[3,2,1]になること', () => {
        // 入力用のLinkedListを作成
        const head = arrayToLinkedList([1, 2, 3]);
        
        // 関数を実行
        const result = reverseList(head);
        
        // LinkedListを配列に変換して比較
        expect(linkedListToArray(result)).toEqual([3, 2, 1]);
    });

    test('テストケース2: 空のリストを処理できること', () => {
        const result = reverseList(null);
        expect(result).toBeNull();
    });

    test('テストケース3: 要素が1つの場合', () => {
        const head = new ListNode(1);
        const result = reverseList(head);
        expect(linkedListToArray(result)).toEqual([1]);
    });
})