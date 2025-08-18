/* 택배 박스 정리 시스템 (스택)
문제 설명
동일한 종류의 박스가 연속해서 쌓여 있을 때, 중복된 박스들은 하나만 남기고 모두 제거합니다. 
이때 박스들은 쌓인 순서대로 남겨집니다. 박스 종류가 숫자로 표현된 배열 boxes 가 주어질 때, 연속된
같은 숫자는 한 개만 남기고 중복 종류를 제거한 결과를 반환하는 함수를 완성하세요.
 */

function solution(boxes) {
  const stack = [];

  for (const box of boxes) {
    if (box !== stack[stack.length - 1]) {
      stack.push(box);
    }
  }
  return stack;
}

console.log(solution([2, 2, 5, 5, 5, 1, 1]));
console.log(solution([7, 7, 8, 8, 0, 0, 0]));
