class PQ_Item {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

class PQ {
	constructor(capacity) {
		this.items = this.fillItems(capacity);
		this.qSize = 0;
		this.highestPriority = 0;
	}

	fillItems(capacity) {
		const arr = new Array(capacity);
		for (let i = 0; i < arr.length; i++) {
			arr[i] = new Array();
		}
		return arr;
	}

	// This function is used to insert new data into the queue.
	enqueue(item) {
		if (item.priority > this.items.length - 1) {
			item.priority = this.items.length - 1;
		}

		this.items[item.priority].push(item);
		this.items[item.priority].sort((a, b) => {
			return a.value - b.value;
		});

		this.qSize++;

		if (item.priority > this.highestPriority) {
			this.highestPriority = item.priority;
		}
	}

	// This function removes the element with the highest priority from the queue.
	dequeue() {
		if (this.qSize === 0) {
			return;
		}
		this.items[this.highestPriority].pop();
		this.qSize--;

		for (let i = this.items.length - 1; i >= 0; i--) {
			if (this.items[i].length > 0) {
				this.highestPriority = this.items[i][this.items[i].length - 1].priority;
				break;
			}
		}
	}

	// This function is used to get the highest priority element in the queue without removing it from the queue.
	peek() {
		return this.items[this.highestPriority][this.items[this.highestPriority].length - 1];
	}
}

const Q = new PQ(10);

// Q.enqueue(new PQ_Item(1, 9));
// Q.enqueue(new PQ_Item(3, 10));
// Q.enqueue(new PQ_Item(111, 3));

// console.log(Q.items[3][0]);
// console.log(Q.peek());
console.log(Q);

Q.dequeue();
// console.log(Q.peek());
console.log(Q);
