/*연결리스트 뒤집기 (연결리스트)
문제 설명
단일 연결 리스트가 주어질 때, 이 리스트의 노드 순서를 반대로 뒤집어 새로운 리스트를 만드세요.
예를 들어, 리스트가 [1, 2, 3, 4, 5] 라면, 이를 뒤집으면 [5, 4, 3, 2, 1]이 됩니다.
*/

class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  findNode(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    let count = 0;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return;

    if (index === 0) {
      this.head = this.head.next;
      if (this.length === 1) this.tail = null;
      this.length--;
      return;
    }

    const prevNode = this.findNode(index - 1);
    const removeNode = prevNode.next;
    prevNode.next = removeNode.next;

    if (index === this.length - 1) {
      this.tail = prevNode;
    }

    this.length--;
  }
  insert(index, value) {
    if (index <= 0) {
      this.prepend(value);
      return;
    }
    if (index >= this.length) {
      this.append(value);
      return;
    }
    const newNode = new Node(value);
    const prevNode = this.findNode(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  reverse() {
    if (!this.head) return;

    if (!this.head.next) {
      return this.head;
    }

    this.tail = this.head;

    let first = this.head;
    let second = first.next;

    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}

function solution(arr) {
  if (arr.length === 0) return [];

  const linkedList = new LinkedList(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    linkedList.append(arr[i]);
  }
  linkedList.reverse();
  return linkedList.printList();
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([3, 2, 1]));
console.log(solution([1, 4, 1, 5, 6]));
