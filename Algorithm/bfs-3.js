/*바이러스 감염 구역 (BFS)
문제 설명
전염병 연구원 제인은 바이러스가 퍼진 지역을 분석하고 있습니다. 연구 대상 지역은 직사각형 격자 모양의
지도이며, 각 칸에는 ‘X’ 또는 1에서 9 사이의 숫자가 적혀 있습니다. ‘X’는 바이러스가 없는 안전한 구역을
의미하고, 숫자는 해당 구역에 감염된 사람 수를 나타냅니다.
상, 하, 좌, 우로 인접한 감염자 숫자 칸들은 하나의 감염 구역(cluster)을 형성합니다. 제인은 각 감염 구역
내 감염자 수를 모두 합산하여, 감염자가 많은 순서대로 치료 우선순위를 정하려고 합니다.
감염 지역을 나타내는 문자열 배열 maps가 매개변수로 주어질 때, 각 감염 구역에 있는 감염자의 총합을 오
름차순으로 정렬하여 배열로 반환하는 solution 함수를 완성하세요. 만약 감염 구역이 하나도 없다면 [-1]을
반환해야 합니다.
제한사항
3 ≤ maps의 길이 ≤ 100
3 ≤ maps[i]의 길이 ≤ 100
maps[i]는 'X' 또는 1부터 9까지의 숫자로 이루어진 문자열입니다.
지도는 직사각형 형태입니다.
 */

function solution(maps) {
  const answer = [];
  const n = maps.length; // 세로
  const m = maps[0].length; // 가로

  // 사각형 칸 별로 방문체크할 배열
  const check = Array.from({ length: n }, () => Array(m).fill(0));

  function bfs(maps, x, y) {
    // 상하좌우 이동용 배열
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    const queue = [[x, y]];
    let count = Number(maps[x][y]);

    check[x][y] = 1;

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];

        if (
          0 <= nx &&
          nx < n &&
          0 <= ny &&
          ny < m &&
          check[nx][ny] === 0 &&
          maps[nx][ny] !== "X"
        ) {
          check[nx][ny] = 1;
          queue.push([nx, ny]);
          count += Number(maps[nx][ny]);
        }
      }
    }
    return count;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] !== "X" && check[i][j] === 0) {
        const count = bfs(maps, i, j);
        answer.push(count);
      }
    }
  }
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
console.log(solution(["X426X", "3X5X1", "XXX23", "7XX17"]));
console.log(solution(["X1X2X", "X1X2X", "X1X2X"]));
console.log(solution(["XXX", "XXX", "XXX"]));
