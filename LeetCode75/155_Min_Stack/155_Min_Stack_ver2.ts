class MinStack2 {
	private stack: {val: number; min: number; }[];
	constructor() {
		this.stack = []
	}

	push(val: number): void {
		// valとminのオブジェクトを配列に格納
		this.stack.push({
			val,
			min: this.stack.length === 0 ? val : Math.min(val, this.getMin())
		})
	}

	pop(): void {
		this.stack.pop()
	}

	top():number {
		return this.stack[this.stack.length - 1].val;
	}

	getMin(): number {
		return this.stack.length === 0 ? 0 : this.stack[this.stack.length - 1].min;
	}
}