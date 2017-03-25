class QueueNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	} 
}

class Queue {
	constructor(){
		this._size = 0;
		this._front = null;
		this._rear = null;
	}
	isEmpty(){
		return this.size() === 0;
	}
	size(){
		return this._size;
	}
	enqueue(value) {
		let newNode = new QueueNode(value);
		if(this._front === null) {
			this._front = newNode;
			this._rear = newNode;
		}else{
			this._rear.next = newNode;
			this._rear = newNode;
		}
		this._size++;
	}
	dequeue(){
		if(this.isEmpty()) {
			return "QUEUE EMPTY - dequeue"
		}
		else {
			let value = this._front.value;
			this._front = this._front.next;
			this._size--;
			return value;
		}

	}
	front(){
		if(this.isEmpty())
			return "QUEUE EMPTY - front";
		else 
			return this._front.value;
	}
}


