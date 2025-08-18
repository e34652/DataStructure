function solution(gate) {
  const stack = [];

  for (let char of gate) {
    if (char === "<") {
      stack.push(char);
    } else {
      //열지도 않고 닫는 경우 = 올바르지 않음
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

// '<': 열기 / '>': 닫기
console.log(solution("<<>>"));
console.log(solution("<<>>"));
console.log(solution(">><<"));
console.log(solution("<<<>"));
