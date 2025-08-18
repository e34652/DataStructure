/* 알파벳 폭발 (스택)
문제 설명
알파벳으로 이루어진 문자열 s 가 주어집니다. 
이 문자열의 같은 알파벳의 대소문자가 연속으로 붙어 있으면 충돌하여 문자열에서 제거됩니다.
이 현상은 폭발 후에도 남은 문자들 사이에 다시 충돌이 생기면 계속해서 반복됩니다. 
 */

function solution(s) {
  const stack = [];

  for (const char of s) {
    const top = stack[stack.length - 1];
    if (top && Math.abs(top.charCodeAt() - char.charCodeAt()) === 32) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
}
console.log(solution("infFflearn"));
console.log(solution("aAbBcC"));
console.log(solution("xYyX"));
console.log(solution("a"));
console.log(solution("Code"));
