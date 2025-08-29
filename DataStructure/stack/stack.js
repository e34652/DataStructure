class Stack {
  constructor() {
    this.array = [];
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    return this.array.pop();
  }
  peek() {
    return this.array[this.array.length - 1];
  }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");
console.log("stack", stack);

stack.pop();
console.log("stack", stack);

const top = stack.peek();

console.log("top", top);
