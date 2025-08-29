/*선물 배분하기 (정렬/투포인터)
문제 설명
한 회사에서 직원들에게 선물을 나누어 주려고 합니다.
각 직원 i 는 자신이 받을 수 있는 최소 선물 가치 m[i] 를 가지고 있으며, 회사가 보유한 선물 j 는 가치 v[j] 를
가집니다.
한 직원에게는 선물을 최대 한 개만 줄 수 있습니다.
한 선물도 최대 한 명에게만 줄 수 있습니다.
선물의 가치는 직원의 최소 가치 이상이어야 해당 직원이 만족합니다.
회사는 최대한 많은 직원을 만족시키고자 합니다. 만족하는 직원의 최대 수를 구하세요.
입력 형식
m.length == N (1 ≤ N ≤ 30,000)
1 ≤ m[i] ≤ 2³¹ - 1
v.length == M (0 ≤ M ≤ 10,000)
1 ≤ v[j] ≤ 2³¹ - 1
출력 형식
만족하는 직원의 최대 수를 나타내는 정수를 반환합니다. */

function solution(m, v) {
  m.sort((a, b) => a - b);
  v.sort((a, b) => a - b);

  let satisfiedEmployees = 0;
  let i = 0;
  let j = 0;

  while (i < m.length && j < v.length) {
    if (v[j] >= m[i]) {
      satisfiedEmployees++;
      i++;
    }
    j++;
  }

  return satisfiedEmployees;
}

console.log(solution([2, 4, 6, 8, 10], [1, 3, 5, 7, 9, 11]));
console.log(solution([5, 10, 15], [5, 5]));
console.log(solution([2, 4], [1, 2, 3]));
