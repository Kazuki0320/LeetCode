export  class MinStack7 {
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
		this.dataStack.pop();
		this.minStack.pop();
	}

	top(){
		return this.dataStack[this.dataStack.length-1]
	}

	getMin(): number {
		return this.minStack.length === 0? 0 : this.minStack[this.minStack.length-1]
	}
}