class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // add to this list end
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    ++this.length;
    return this;
  }

  // remove from this list end
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = this.tail = null;
    }
    return current;
  }

  // remove from this head (Start) of this list
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // add to the head (Start) of this list
  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  // get value for specific index
  get(index) {
    if (!this.length || index >= this.length) return null;
    if (index == 0) return this.head;
    if (index === this.length - 1) return this.tail;

    let counter = 0;
    let node = this.head;
    while (counter < index) {
      node = node.next;
      counter++;
    }
    return node;
  }

  // set the value in particular position
  set(index, value) {
    let foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.val = value;
    return true;
  }

  // Insert a new node at the index
  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length - 1) {
      this.push(value);
      return true;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }

    let newNode = new Node(value);
    let previous = this.get(index - 1);
    let nextNode = previous.next;
    previous.next = newNode;
    newNode.next = nextNode;
    this.length++;

    return true;
  }

  // remove from the list
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) {
      return this.shift(index);
    }
    if (index === this.length - 1) {
      return this.pop(index);
    }

    let previous = this.get(index - 1);
    let removed = previous.next;
    previous.next = removed.next;
    this.length--;
    return removed;
  }

  // reverse the list
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new LinkedList();
list.push('hello');
list.push('world');
list.push('from');
list.push('Nigeria');
list.push('Stay');
list.push('Bless');
// list.push('!')
// console.log('Pop: ', list.shift());
// console.log('Pop: ', list.shift());
// list.unshift(1);

console.log('Result: ', list.reverse());

console.log(list);
