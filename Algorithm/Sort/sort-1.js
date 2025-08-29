/*랭킹 태그 부여하기 (정렬)
문제 설명
어떤 대회에 참가한 선수들의 점수가 정수 배열 score 에 주어집니다.
score[i] 는 i 번 참가자의 점수를 의미하며, 모든 점수는 서로 다릅니다.
점수가 높은 순서대로 각 선수에게 다음과 같은 랭킹 태그(ranking tag) 를 부여하려 합니다:
1등: "Top 1"
2등: "Top 2"
3등: "Top 3"
4등부터는 "Rank x" 형식으로 부여합니다. (예: 4등 → "Rank 4" , 5등 → "Rank 5" )
모든 선수에 대해 해당 랭킹 태그를 담은 문자열 배열을 반환하세요.
단, 결과는 입력 순서대로 정렬되어 있어야 합니다.
*/
function solution(score) {
  const sorted = score
    .map((s, index) => [s, index]) // [점수, 인덱스] 형식의 튜플로 변환, 나중에 결과 배열에 인덱스를 참조해서 원래 위치대로 반환
    .sort((a, b) => b[0] - a[0]); // 튜플의 첫 번째 요소(점수)를 기준으로 내림차순 정렬

  // 내림차순 정렬시 인덱스 + 1 = 등수

  const n = score.length;
  const answer = Array(n);

  for (let rank = 0; rank < n; rank++) {
    const index = sorted[rank][1]; // rank번째 인덱스 값의 1번째 요소(원래 위치)
    if (rank < 3) {
      answer[index] = `Top ${rank + 1}`;
    } else {
      answer[index] = `Rank ${rank + 1}`;
    }
  }
  return answer;
}
console.log(solution([95, 85, 90, 70]));
console.log(solution([50, 100, 75]));
