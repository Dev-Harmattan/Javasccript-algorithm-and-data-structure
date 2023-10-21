class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this.size++;
  }

  dequeue() {
    if (!this.first) return null;
    let currentFirstNode = this.first;
    if (this.size === 1) {
      this.last = null;
      this.first = null;
    } else {
      this.first = currentFirstNode.next;
    }
    this.size--;
    return currentFirstNode.val;
  }
}

let queue = new Queue();
queue.enqueue('foo');
queue.enqueue('bar');
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
