class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
    } else {
      const oldLast = this.last;
      oldLast.next = newNode;
      this.last = newNode;
      this.length++;
    }
  }

  dequeue() {
    if (this.length === 0) return null;

    const removedNode = this.first; //가장 오래된 데이터가 제일 먼저 나감

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.length--;
    return removedNode.value;
  }
  peek() {
    return this.first;
  }

  findNode(index) {
    let currentNode = this.first;
    let count = 0;
    while (currentNode && count < index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }
  delete(index) {
    if (this.length === 0) return null;
    const prevNode = this.findNode(index);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode.value;
  }
}

const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
