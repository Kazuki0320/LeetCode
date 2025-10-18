export class MinStack8 {
	private dataStack: number[] = [];
	private minStack: number[] = [];

	push(val: number) {
		this.dataStack.push(val);

		if (this.minStack.length === 0) {
			this.minStack.push(val)
		} else {
			this.minStack.push(Math.min(val, this.minStack[this.minStack.length-1]));
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

/**
 * クラス内で共有して利用するデータ（インスタンスの状態）は、クラスフィールドとして定義し、
 * アクセス制御のために修飾子（private/public/protected）をつける。
 * メソッド（関数）内部でのみ利用する一時的な変数は、const や letを用いてブロックスコープ内に宣言する。
 */