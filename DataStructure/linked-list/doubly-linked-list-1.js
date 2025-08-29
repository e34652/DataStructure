/*
영상편집기 타임라인 관리 (이중연결리스트)
문제 설명
당신은 영상 편집기 개발자입니다. 
영상은 여러 개의 클립(clip)으로 구성되어 있고, 
클립들은 순서대로 타임 라인에 배치되어 있습니다.

타임라인은 클립들이 일렬로 연결된 형태이며, 
각 클립은 고유 번호( 0 부터 n-1 )를 갖고 있습니다.

현재 선택된 클립의 위치는 k 입니다.
편집자는 다음 명령어를 수행할 수 있습니다.

명령어 종류
"L X" : 현재 선택된 클립에서 X 개 앞(왼쪽) 클립으로 이동한다. (이동 가능한 범위를 벗어나지 않는다)
"R X" : 현재 선택된 클립에서 X 개 뒤(오른쪽) 클립으로 이동한다.
"D" : 현재 선택된 클립을 타임라인에서 삭제한다. 삭제한 클립은 복구를 위해 따로 저장한다.
삭제 후에는 다음 클립을 선택한다. 만약 삭제한 클립이 마지막 클립이라면 이전 클립을 선택한다.
"U" : 가장 최근에 삭제한 클립을 타임라인에 원래 위치대로 복구한다. 현재 선택된 클립은 변하지 않는다.

출력 형식
모든 명령어 수행 후, 
타임라인에 남아있는 클립은 "O" , 
삭제된 클립은 "X" 로 표시한 문자열을 반환하세요.

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.selected = null;
    this.stack = [];
    this.length = 1;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  remove() {
    this.stack.push(this.selected);
    const prevNode = this.selected.prev;
    const nextNode = this.selected.next;

    if (prevNode) {
      prevNode.next = nextNode;
    }
    if (nextNode) {
      nextNode.prev = prevNode;
      this.selected = nextNode;
    } else {
      this.selected = prevNode;
    }
  }

  move(direction, count) {
    let currentNode = this.selected;
    for (let i = 0; i < count; i++) {
      currentNode = currentNode[direction];
    }
    this.selected = currentNode;
  }
  recover() {
    const recoverNode = this.stack.pop();
    const prevNode = recoverNode.prev;
    const nextNode = recoverNode.next;
    if (prevNode) {
      prevNode.next = recoverNode;
    }
    if (nextNode) {
      nextNode.prev = recoverNode;
    }
  }
}

function solution(n, k, cmd) {
  const result = Array.from({ length: n }, () => "0");
  const linkedList = new DoublyLinkedList(0);
  //n개 만큼의 노드를 삽입하다가 k번째 노드를 작업할 때 selected로 설정을 해줌
  for (let i = 1; i < n; i++) {
    linkedList.append(i);
  }
  linkedList.selected = linkedList.head;
  for (let i = 0; i < k; i++) linkedList.move("next", 1);
  for (const command of cmd) {
    const [action, count] = command.split(" ");
    if (action === "R") {
      linkedList.move("next", count);
    }
    if (action === "L") {
      linkedList.move("prev", count);
    }
    if (action === "D") {
      linkedList.remove();
    }
    if (action === "U") {
      linkedList.recover();
    }
  }
  //node의 value는 78번째 줄에서 index를 의미하는 i로 다 채웠으니
  //전부 0인 result 배열의 node.value(value = index)번째 요소를 X로 바꾼다
  linkedList.stack.forEach((node) => (result[node.value] = "X"));
  return result.join("");
}

console.log(solution(5, 2, ["D", "D", "D"]));
console.log(solution(6, 2, ["D", "R 2", "D", "U"]));
console.log(solution(8, 3, ["D", "D", "L 2", "D", "U"]));
