export class MinStack {
    private dataStack: number[] = [];
    private minStack: number[] = [];

    constructor() {} 

    push(val: number): void {
        this.dataStack.push(val);

        // minStackが空ならvalを積む
        // 空でなければ、「直前の最小値」と比較して小さい方を積む
        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
            const currentMin = this.minStack[this.minStack.length - 1];
            this.minStack.push(Math.min(val, currentMin));
        }
    }

    pop(): void {
        this.dataStack.pop();
        this.minStack.pop();
    }

    top(): number {
        return this.dataStack[this.dataStack.length - 1];
    }

    getMin(): number {
        return this.minStack.length === 0 ? 0 : this.minStack[this.minStack.length - 1];
    }
}

/**
 * それぞれの関数には役割がある
 * - push
 *  - dataStackに値を積む
 *  - minStackは、条件を分ける
 *   - 空の場合は、その値が最小値となる
 *   - 空ではない場合は、直前の値と比較して小さい値を積む
 * 
 * - pop
 *   - dataStackの末尾の要素を除く
 *   - minStackの末尾の要素を除く
 * 
 * - top
 *  - dataStackの末尾の要素を取得
 *  - this.dataStack[this.dataStack.length-1]
 * 
 * - getMin
 *   - minStackが空の場合は0を返す
 *   - そうでない場合は、minStackの最後の要素を取得
 */