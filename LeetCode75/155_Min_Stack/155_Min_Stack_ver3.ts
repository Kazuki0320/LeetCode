class MinStack3 {
	private dataStack: number[] = [];
	private minStack: number[] = [];

	constructor() {}

	push(val: number): void {
		this.dataStack.push(val)
		// minStackが空ならvalを積む
		// 空でなければ「直前の最小値」と比較して小さい方を積む
		if (this.minStack.length === 0) {
			this.minStack.push(val)
		} else {
			const currentMin = this.minStack[this.minStack.length - 1];
			this.minStack.push(Math.min(val, currentMin));
		}
	}

	pop(): void {
		this.dataStack.pop()
		this.minStack.pop()
	}

	top():number {
		return this.dataStack[this.dataStack.length-1]
	}

	getMin(): number {
		return this.minStack[this.minStack.length-1];
	}
}
