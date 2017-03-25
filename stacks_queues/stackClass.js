class StackNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	} 
}

class Stack {
	constructor(){
		this._top = 0;
		this._head = null;
	}
	isEmpty(){
		return this.size() === 0;
	}
	size(){
		return this._top;
	}
	push(value) {
		let newNode = new StackNode(value);
		if(this._head === null) {
			this._head = newNode;
		}else{
			newNode.next = this._head;
			this._head = newNode;
		}
		this._top++;
	}
	pop(){
		if(this.isEmpty()) {
			return "STACK EMPTY - pop"
		}
		else {
			let value = this._head.value;
			this._head = this._head.next;
			this._top--;
			return value;
		}

	}
	top(){
		if(this.isEmpty())
			return "STACK EMPTY - top";
		else 
			return this._head.value;
	}
}
