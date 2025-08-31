/* 생산 공정 최적화 (이분탐색)
문제 설명
한 공장에서 여러 대의 기계가 동시에 제품을 생산하고 있습니다.
각 기계는 고정된 시간마다 하나의 제품을 생산할 수 있으며, 기계마다 생산 속도가 다릅니다.
공장에서는 총 n 개의 제품을 생산하려고 합니다.
모든 기계는 동시에 작동할 수 있으며, 한 기계가 동시에 두 개 이상의 제품을 생산할 수는 없습니다.
공장에서 n 개의 제품을 생산하는 데 필요한 최소 시간을 구하는 프로그램을 작성하세요.
입력 형식
함수 solution(n, speeds) 를 구현하세요.
n 은 정수이며, 생산해야 할 제품 수입니다. (1 ≤ n ≤ 1,000,000,000)
speeds 는 정수 배열이며, 각 기계가 하나의 제품을 생산하는 데 걸리는 시간(분)입니다. (1 ≤
speeds.length ≤ 100,000)
speeds[i] 는 i 번째 기계가 하나의 제품을 생산하는 데 걸리는 시간입니다. (1 ≤ speeds[i] ≤
1,000,000,000)
출력 형식
n 개의 제품을 모두 생산하는 데 걸리는 최소 시간(분) 을 정수로 반환합니다.
 */

function solution(n, speeds) {
  //이진 탐색은 “후보 구간” 안에서 답을 좁혀가는 과정
  // n: 총 작업 개수 , speeds: 걸리는 시간 배열
  let left = 1; // 이진 탐색 시작점
  let right = Math.max(...speeds) * n; // 최대시간 (최악)
  let answer = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // mid: 기준 값
    let total = 0;

    // 배열.reduce((누적값, 현재값 => 콜백함수, 시작값))
    // const total = speeds.reduce((sum, time) => sum + Math.floor(mid/time), 0)
    for (let time of speeds) {
      total += Math.floor(mid / time);
    }

    if (total >= n) {
      // 작업 완료 가능 -> 답은 mid보다 작을 수도 있음
      answer = mid;
      right = mid - 1; // 탐색
    } else {
      //
      left = mid + 1;
    }
  }
  return answer;
}
console.log(solution(8, [5, 9]));
console.log(solution(6, [7, 10]));

//둘다 구하려면
/*
let minAnswer = right;  // 최소값 후보
let maxAnswer = left;   // 최대값 후보


// 최소값 탐색
while (left <= right) {
    let mid = Math.floor((left + right)/2);
    if (total >= n) {
        minAnswer = mid;
        right = mid-1;
    } else {
        left = mid+1;
    }
}

// 최대값 탐색
left = 1;
right = Math.max(...speeds)*n;
while (left <= right) {
    let mid = Math.floor((left + right)/2);
    if (total <= n) {
        maxAnswer = mid;
        left = mid+1;
    } else {
        right = mid-1;
    }
}
*/
