class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = { value: value, next: null };
    this.tail = this.head;
    this.length = 1;
  }
  // 앞에 추가(value: 추가될 데이터의 값)
  prepend(value) {
    const newNode = new Node(value); // 새 노드 생성
    newNode.next = this.head; // 새 노드를 현재 head와 연결
    this.head = newNode; // 헤드를 새 노드로 변경
    this.length++;
  }
  // 뒤에 추가(value: 추가될 데이터의 값)
  append(value) {
    const newNode = new Node(value); // 새 노드 생성
    this.tail.next = newNode; // 새 노드 연결
    this.tail = newNode; // tail 변경
    this.length++;
  }
  // 노드 찾기(index: 찾을 데이터의 위치)
  findNode(index) {
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }
  // 중간 삽입(index: 데이터를 삽입할 위치, value: 추가할 데이터의 값)
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    }
    if (index >= this.length) {
      this.append(value);
      return;
    }
    const newNode = new Node(value); // 노드 생성
    const prevNode = this.findNode(index - 1);
    newNode.next = prevNode.next; // 이전 노드의 next와 연결
    prevNode.next = newNode; // 이전 노드와 연결
    this.length++;
  }
  // 제거(index: 제거할 데이터의 위치)
  remove(index) {
    const prevNode = this.findNode(index - 1);
    const removeNode = prevNode.next;
    prevNode.next = removeNode.next;
    this.length--;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
}

const linkedList = new LinkedList("A");
linkedList.append("B");
linkedList.printList();
linkedList.append("C");
linkedList.printList();
linkedList.prepend("D");
linkedList.printList();
linkedList.insert(2, "E");
linkedList.printList();
linkedList.remove(3);
linkedList.printList();
