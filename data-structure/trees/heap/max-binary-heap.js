// left -> to locate children 2n + 1
// right -> to locate children 2n + 2
// for children to locate parent Math.floor((n - 1) / 2)

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(value) {
    this.values.push(value);
    this.bubble();
  }

  bubble() {
    let elementIndex = this.values.length - 1;
    let element = this.values[elementIndex];

    while (elementIndex > 0) {
      let parentIndex = Math.floor((elementIndex - 1) / 2);
      let parent = this.values[parentIndex];

      if (element <= parent) break;

      this.values[parentIndex] = element;
      this.values[elementIndex] = parent;
      elementIndex = parentIndex;
    }
  }

  extractMax() {
    let max = this.values[0];
    let element = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = element;
      this.trickDown();
    }
    return max;
  }

  trickDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];
    while (true) {
      let rightIndex = 2 * idx + 1;
      let leftIndex = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftIndex < length) {
        leftChild = this.values[leftIndex];
        if (leftChild > element) {
          swap = leftIndex;
        }
      }

      if (rightIndex < length) {
        rightChild = this.values[rightIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightIndex;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let binaryHeap = new MaxBinaryHeap();

console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
