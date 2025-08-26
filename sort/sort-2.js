/* 무임승차 단속 (정렬)
문제 설명
지하철을 운행하는 교통공사에서는 무임승차 단속을 위해 특정 시점에 검표원을 태워 단속을 진행합니다.
각 승객은 [탑승 시각, 하차 시각] 구간 동안 열차를 탑승하며,
검표원이 시각 t 에 단속을 하면, t 가 [탑승, 하차] 구간에 포함된 승객은 모두 검사할 수 있습니다.
모든 승객을 단속하기 위해 필요한 검표 횟수의 최소값을 구하세요.
입력 형식
tickets : 2차원 정수 배열 (길이 ≤ 100,000)
tickets[i] = [start, end] : i번째 승객의 탑승 시각과 하차 시각
모든 시각은 -2³¹ <= start < end <= 2³¹ - 1 범위의 정수
출력 형식
모든 승객을 단속하기 위해 필요한 최소 검표 횟수를 정수로 출력 */

function solution(tickets) {
  tickets.sort((a, b) => a[0] - b[0]); // 출발시각 기준 오름차순 [0] = 출발시각, [1] = 도착시각

  // 첫승객이 내릴때 하면 첫승객 탑승 ~ 하차 사이의 모든 승객 단속 가능
  // 이후 탑승 시각이 inspectionTime보다 클 때마다 단속하고 inspectionTime 갱신

  inspectionCount = 1;
  inspectionTime = tickets[0][1];
  for (i = 0; i < tickets.length; i++) {
    if (tickets[i][0] > inspectionTime) {
      inspectionCount++;
      inspectionTime = tickets[i][1];
    }
  }
  return inspectionCount;
}
console.log(
  solution([
    [8, 10],
    [3, 7],
    [1, 5],
    [2, 6],
  ])
);
console.log(
  solution([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
