class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let currentFirst = this.first;
      this.first = newNode;
      this.first.next = currentFirst;
    }
    return this.size++;
  }

  pop() {
    if (!this.first) return null;
    let currentNode = this.first;
    if (this.size === 1) {
      this.last = null;
    } else {
      this.first = currentNode.next;
    }
    this.size--;
    return currentNode.val;
  }
}

let stack = new Stack();
stack.push('first');
stack.push('last');
console.log(stack.pop());
console.log(stack.pop());
