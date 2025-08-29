class Queue {
  constructor() {
    this.array = [];
  }

  enqueue(value) {
    this.array.push(value);
  }
  dequeue() {
    return this.array.shift(); // shift: 배열의 첫 번째 요소를 제거하고 반환
  }

  peek() {
    return this.array[0];
  }
}

const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
queue.enqueue("D");
console.log("queue", queue);

console.log(queue.dequeue()); // 제거 + 제거한 요소 출력
console.log("queue", queue); // 제거 후 남은 배열 출력

const top = queue.peek();

console.log("peek", top);
