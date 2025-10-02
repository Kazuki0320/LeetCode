export class MinStack5 {
	/**
	 * 目的
	 * 各関数が呼ばれたときに、適切な値を返せること
	 * 
	 * アプローチ
	 * 2本スタック
	 * 
	 * 処理内容
	 * - dataStack
	 * 	- 要素ごとの値を管理する
	 * - minStack
	 *  - 要素ごとに直前の最小値と比較した値を管理する
	 * - push
	 *  - dataStackに値を追加
	 *  - もし、minStackが空である場合
	 *   - minStackに現在の値を追加（最小値）を追加
	 *  - もし、空出ない場合
	 *   - minStackの末尾要素をcurrentとして宣言
	 *   - Math.minを利用して、直前の最小値と現在の値を比較して最小値をminStackに追加
	 * - pop
	 *  - dataStackの末尾を削除
	 *  - minStackの末尾を削除
	 * - top
	 *  - dataStackの末尾を取得
	 *  - スタックであることから、末尾がトップとなる
	 * - getMin
	 *  - minStackの末尾の要素を取得
	 */

	private dataStack: number[] = [];
	private minStack: number[] = [];

	constructor() {}

	push(val: number): void {
		this.dataStack.push(val);

		if (this.minStack.length === 0) {
			this.minStack.push(val);
		} else {
			const current = this.minStack[this.minStack.length-1];
			this.minStack.push(Math.min(val, current));
		}
	}

	pop(): void {
		this.dataStack.pop();
		this.minStack.pop();
	}

	top(): number {
		return this.dataStack[this.dataStack.length-1];
	}

	getMin(): number {
		return this.minStack.length === 0 ? 0 : this.minStack[this.minStack.length-1];
	}
}