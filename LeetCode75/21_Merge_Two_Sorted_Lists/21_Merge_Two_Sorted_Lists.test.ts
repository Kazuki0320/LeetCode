import { mergeTwoLists } from "./21_Merge_Two_Sorted_Lists6"

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

describe('mergeTwoLists', () => {
    test("基本テスト1: 同じ長さのリストをマージ", () => {
        const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
        const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

        const result = mergeTwoLists(list1, list2);
        expect(linkedListToArray(result)).toEqual([1,2,3,4,5,6]);
    });

    test("基本テスト2: 長さの異なるリストをマージ", () => {
        const list1 = new ListNode(1, new ListNode(3));
        const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

        const result = mergeTwoLists(list1, list2);
        expect(linkedListToArray(result)).toEqual([1,2,3,4,6]);
    });

    test("エッジケース1: 空のリストとのマージ", () => {
        const list1 = new ListNode(1, new ListNode(3));
        const list2 = null;

        const result = mergeTwoLists(list1, list2);
        expect(linkedListToArray(result)).toEqual([1,3]);
    });

    test("エッジケース2: 両方とも空のリスト", () => {
        const result = mergeTwoLists(null, null);
        expect(linkedListToArray(result)).toEqual([]);
    });
})