/*
성문 열고 닫기 (스택)
문제 설명
성문은 '<' 기호로 열고 '>' 기호로 닫습니다. 열려야만 닫을 수 있으며, 열린 성문은 반드시 모두 닫혀야 합니다. 성문을 여닫는 명령어로 구성된 문자열 gate 가 주어질 때, 이 명령이 성문을 안전하게 관리한 것인
지 판별하는 함수를 작성하세요.
 */

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
