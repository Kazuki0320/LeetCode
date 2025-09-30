import { MinStack } from './155_Min_Stack_ver1';

describe('MinStack', () => {
    test('基本テスト: LeetCodeの例', () => {
        const minStack = new MinStack();
        
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        
        expect(minStack.getMin()).toBe(-3);  // スタック全体の最小値は-3
        
        minStack.pop();  // -3を削除
        
        expect(minStack.top()).toBe(0);      // 最後の要素は0
        expect(minStack.getMin()).toBe(-2);  // -3を削除後の最小値は-2
    });

    test('空のスタックのテスト', () => {
        const minStack = new MinStack();
        
        expect(minStack.getMin()).toBe(0);  // 空のスタックの最小値は0
        
        minStack.push(5);
        expect(minStack.getMin()).toBe(5);  // 要素が1つの場合、その値が最小値
        
        minStack.pop();
        expect(minStack.getMin()).toBe(0);  // 再び空になった場合は0
    });

    test('同じ値の要素を追加するテスト', () => {
        const minStack = new MinStack();
        
        minStack.push(1);
        minStack.push(1);
        minStack.push(1);
        
        expect(minStack.getMin()).toBe(1);
        expect(minStack.top()).toBe(1);
        
        minStack.pop();
        expect(minStack.getMin()).toBe(1);  // 同じ値が残っているので最小値は変わらない
    });

    test('最小値の更新テスト', () => {
        const minStack = new MinStack();
        
        // 降順に追加
        minStack.push(3);
        expect(minStack.getMin()).toBe(3);
        
        minStack.push(2);
        expect(minStack.getMin()).toBe(2);
        
        minStack.push(1);
        expect(minStack.getMin()).toBe(1);
        
        // 最小値を削除していく
        minStack.pop();  // 1を削除
        expect(minStack.getMin()).toBe(2);
        
        minStack.pop();  // 2を削除
        expect(minStack.getMin()).toBe(3);
    });

    test('負の数と正の数の混合テスト', () => {
        const minStack = new MinStack();
        
        minStack.push(-1);
        minStack.push(5);
        minStack.push(-10);
        minStack.push(15);
        
        expect(minStack.getMin()).toBe(-10);
        expect(minStack.top()).toBe(15);
        
        minStack.pop();  // 15を削除
        minStack.pop();  // -10を削除
        
        expect(minStack.getMin()).toBe(-1);
        expect(minStack.top()).toBe(5);
    });
});
