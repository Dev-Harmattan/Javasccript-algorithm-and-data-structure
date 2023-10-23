class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.items.push(newNode);
    this.bubble();
  }

  bubble() {
    let elementIdx = this.items.length - 1;
    let element = this.items[elementIdx];

    while (elementIdx < 0) {
      let parentIdx = Math.floor((elementIdx - 1) / 2);
      let parent = this.items[parentIdx];

      if (element.priority >= parent.priority) break;
      this.items[parentIdx] = element;
      this.items[elementIdx] = parent;
      elementIdx = parentIdx;
    }
  }

  dequeue() {
    let min = this.items[0];
    let element = this.items.pop();
    if (this.items.length > 0) {
      this.items[0] = element;
      this.trickUp();
    }
    return min;
  }

  trickUp() {
    let idx = 0;
    let element = this.items[0];
    let length = this.items.length;
    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let rightChild, leftChild;
      let swap = null;
      if (leftIdx < length) {
        leftChild = this.items[leftIdx];
        if (leftChild.priority < element.priority) {
          swap = leftIdx;
        }
      }
      if (rightIdx < length) {
        rightChild = this.items[rightIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
        }
      }
      if (swap === null) break;
      this.items[idx] = this.items[swap];
      this.items[swap] = element;
      idx = swap;
    }
  }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('stroke', 1);
priorityQueue.enqueue('malaria', 2);
priorityQueue.enqueue('headache', 3);

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
