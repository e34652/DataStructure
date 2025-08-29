/*최소한의 수송 트럭 (정렬/투포인터)
문제 설명
당신은 사람들을 수송하기 위한 트럭을 운영하고 있습니다. 각 트럭은 최대 2명까지 탈 수 있으며, 두 사람의
몸무게 합이 트럭의 적재 한도 이하일 경우에만 함께 탈 수 있습니다.
모든 사람의 몸무게가 주어질 때, 모든 사람을 수송하기 위해 필요한 최소 트럭 수를 구하세요.
입력 형식
weights : 사람들의 몸무게를 담은 정수 배열 (1 ≤ weights.length ≤ 50,000)
limit : 트럭 한 대가 견딜 수 있는 최대 하중 (1 ≤ weights[i] ≤ limit ≤ 30,000)
출력 형식
모든 사람을 수송하기 위해 필요한 트럭의 최소 개수를 정수로 출력합니다.
 */

function solution(weights, limit) {
  weights.sort((a, b) => a - b); // 오름차순 정렬 a-b < 0 인 경우 a가 b보다 앞에 위치
  let left = 0;
  let right = weights.length - 1;
  let truckCount = 0;

  while (left <= right) {
    if (weights[left] + weights[right] <= limit) {
      // 기준 이하라면 요구 트럭 수 증가, 양쪽 포인터 이동

      left++;
    }
    truckCount++;
    right--;
  }
  return truckCount;
}
console.log(solution([40, 50], 90));
console.log(solution([70, 50, 50, 30], 100));
console.log(solution([40, 50, 60, 90], 100));
console.log(solution([90, 90, 90, 90], 100));
