/**
 * 目的
 * MinStackクラスから、関数を呼びして適切な値を返す
 * 
 * 処理
 * dataStack:与えられたvalを積む箱
 * minStack:minの値のみを扱う箱
 * 
 * push 
 *  - dataStackの箱につむ
 *  - minStackに積まれている既存のものと比較
 *   - minStackに箱をつむ
 * pop
 *  - dataStackとminStackに最後に積まれた値を取得
 * top
 *  - dataStackの一番最後の値を取得
 * getMin
 *  - minStackを取得
 *   - もし、minStackが0の場合は、0を返す
 */

export class MinStack9 {
	private dataStack: number[] = []
	private minStack: number[] = []

	push(val: number) {
		this.dataStack.push(val)
		if (this.minStack.length === 0) {
			this.minStack.push(val)
		} else {
			this.minStack.push(Math.min(val, this.minStack[this.minStack.length-1]))
		}

	}

	pop() {
		this.dataStack.pop()
		this.minStack.pop()
	}

	top() {
		return this.dataStack[this.dataStack.length-1]
	}

	getMin() {
		return this.minStack.length === 0 ? 0 : this.minStack[this.minStack.length-1]
	}
}