export class MinStack6 {
	/**
	 * 目的
	 * スタック構造を利用して、要素の追加、削除、取得に加え、常に現在の最小値をO(1)で取得できるようにしておく
	 * 
	 * アプローチ
	 * 2本のスタックを使用する
	 * - dataStack:値そのものを保持する
	 * - minStack:各時点での最小値を保持する
	 * 
	 * 処理概要
	 * [push]
	 * - dataStackに値を積む
	 * - minStackが空なら、その値を最小値として積む
	 * - 空で無い場合、minStackの末尾（現在の最小値）と比較し、より小さい方をminStackに追加する
	 * 
	 * [pop]
	 * - dataStackとminStackの末尾をそれぞれ削除し、要素数を同期させる
	 * 
	 * [top]
	 * - dataStackの末尾（スタックのトップ）を返す
	 * 
	 * [getMin]
	 * - minStackの末尾（現在の最小値）を返す
	 * これにより、O(1)で最小値を取得できる
	 * 
	 */
	private minStack: number[] = [];
	private dataStack: number[] = [];

	constructor() {}
	
	push(value: number): void {
		this.dataStack.push(value);

		if (this.minStack.length === 0) {
			this.minStack.push(value)
		} else {
			const current = this.minStack[this.minStack.length-1];
			this.minStack.push(Math.min(value, current));
		}
	}

	pop(): void {
		this.dataStack.pop()
		this.minStack.pop()
	}

	top() {
		return this.dataStack[this.dataStack.length-1];
	}

	getMin(): number {
		return this.minStack.length === 0? 0 : this.minStack[this.minStack.length-1];
	}
}