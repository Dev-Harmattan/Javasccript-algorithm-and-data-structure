class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    }
    this.length--;
    return currentTail;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentHead.next;
      currentHead.next = currentHead.prev = this.head.prev = null;
    }
    this.length--;
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let middle = Math.floor(this.length / 2);
    let currentNode, counter;

    if (index <= middle) {
      counter = 0;
      currentNode = this.head;
      while (counter < index && currentNode.next) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      currentNode = this.tail;
      while (counter > index && currentNode.prev) {
        currentNode = currentNode.prev;
        counter--;
      }
    }
    return currentNode;
  }

  set(index, val) {
    let result = this.get(index);
    if (!result) {
      return false;
    }
    result.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
      return true;
    }

    if (index === 0) {
      this.unshift(val);
      return true;
    }

    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    let newNode = new Node(val);

    newNode.next = nextNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift(index);
    if (index === this.length - 1) return this.pop(index);
    let foundNode = this.get(index);
    let beforeNode = foundNode.prev;
    let afterNode = foundNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    this.length--;
    return foundNode;
  }
}

let list = new DoubleLinkedList();
list.push('first');
list.push('second');
list.push('Last item');
list.remove(2);
// console.log(list.shift());
console.log(list.remove(2));
console.log('LIST: ', list);
