/*깨지는 유리 다리 건너기 (이분탐색)
문제 설명
높은 건물 사이를 잇는 투명한 유리 다리를 여러 참가자가 차례대로 건너야 합니다. 유리 다리는 일렬로 놓인
유리판들로 구성되어 있으며, 각 유리판에는 내구도가 적혀 있습니다.
참가자가 유리판 위를 밟을 때마다 해당 유리판의 내구도가 1씩 줄어듭니다.
내구도가 0이 된 유리판은 깨져 더 이상 밟을 수 없습니다.
참가자는 한 번에 최대 k 칸까지 다음 유리판으로 뛰어넘을 수 있습니다.
다음으로 밟을 수 있는 유리판이 여러 개일 때는 무조건 가장 가까운 유리판으로만 뛰어넘어야 합니다.
깨진 유리판이 연속해서 k 개 이상 존재하면, 참가자는 그 구간을 뛰어넘지 못해 다리 아래로 떨어지고
맙니다.
여러 참가자가 한 명씩 순서대로 다리를 건너며, 앞 사람이 다리를 모두 건넌 뒤 다음 참가자가 시작합니
다.
주어진 유리판 내구도 배열 glass 와 최대 뛰어넘을 수 있는 칸 수 k 가 주어질 때, 최대 몇 명까지 안전하게
다리를 건널 수 있는지 구하는 함수를 작성하세요.
[문제집] 자바스크립트로 배우는 자료구조와 알고리즘 [인프런 Kyo] 13
제한사항
참가자 수는 무제한으로 가정합니다.
glass 배열의 크기: 1 이상 200,000 이하
glass 배열 각 원소의 값: 1 이상 200,000,000 이하
k : 1 이상 glass 배열 길이 이하 */

function checkGlass(glass, mid, k) {
  let brokenCount = 0; // 연속된 깨진 유리판 개수
  for (let x of glass) {
    if (x - mid < 0) {
      brokenCount++;
      if (brokenCount >= k) return false; // 건널 수 없음
    } else {
      brokenCount = 0; // 초기화
    }
  }
  return true; // 건널 수 있음
}

function solution(glass, k) {
  let answer = 0;
  let left = 1; // 최소 인원
  let right = Math.max(...glass); // 최대 인원

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // mid: 기준 값

    if (checkGlass(glass, mid, k)) {
      // 건널 수 있음 -> 더 많은 인원이 건널 수 있는지 확인
      answer = mid;
      left = mid + 1;
    } else {
      // 건널 수 없음 -> 인원 줄이기
      right = mid - 1;
    }
  }
  return answer;
}
console.log(solution([5, 3, 1, 2, 1, 3, 5], 3));
console.log(solution([4, 2, 2, 1, 4], 2));
