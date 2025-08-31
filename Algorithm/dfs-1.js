/*우주 기지국 통신망 (DFS/BFS)
문제 설명

은하계에는 여러 우주 기지국이 존재하며, 각 기지국은 일부 다른 기지국과 직접적으로 통신할 수 있습니다.
두 기지국이 직접 또는 간접적으로 통신이 가능하다면, 이들은 같은 통신망에 속한다고 간주합니다.
기지국 A가 B와 통신할 수 있고, B가 C와 통신할 수 있다면, A와 C는 간접적으로 통신 가능하므로 모두 같
은 통신망에 포함됩니다.
기지국의 수 n 과 기지국 간 직접 통신 여부를 나타내는 2차원 배열 stations 가 주어질 때, 서로 독립적인 통
신망의 개수를 구하는 함수를 작성하세요.
입력 형식
n : 기지국의 개수 (1 ≤ n ≤ 200)
stations : n x n 크기의 2차원 정수 배열. stations[i][j] 는 기지국 i 와 기지국 j 가 직접 통신 가능하면 1, 아
니면 0입니다.
항상 stations[i][i] == 1 입니다. (자기 자신과는 통신 가능) */

//dfs
function solution(n, stations) {
  let answer = 0;
  let visited = Array.from({ length: n }, () => 0);

  function dfs(station) {
    visited[station] = 1; // 시작노드 방문배열에 추가
    for (let i = 0; i < n; i++) {
      if (stations[station][i] && visited[i] === 0) {
        // 미방문 노드 방문(재귀호출)
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    // 첫 탐색이거나 독립된 단위의 존재를 의미
    if (visited[i] === 0) {
      // 미방문 시 재귀호출로 하위노드까지 탐색하는 함수
      dfs(i);
      answer++;
    }
  }
  return answer;
}
console.log(
  solution(3, [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ])
);
console.log(
  solution(4, [
    [1, 1, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 1, 1],
    [0, 0, 1, 1],
  ])
);

//bfs
function solution1(n, stations) {
  let answer = 0;

  const visited1 = Array.from({ length: n }, () => 0);

  const queue = [];
  for (let i = 0; i < n; i++) {
    if (!visited1[i]) {
      answer++;
      visited1[i] = 1;
      queue.push(i);

      while (queue.length) {
        const x = queue.shift();
        for (let j = 0; j < n; j++) {
          // 연결은 되어있는데 미방문상태인 경우
          if (stations[x][j] === 1 && visited1[j] === 0) {
            visited1[j] = 1;
            queue.push(j);
          }
        }
      }
    }
  }
  return answer;
}
console.log(
  solution1(3, [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ])
);
console.log(
  solution1(4, [
    [1, 1, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 1, 1],
    [0, 0, 1, 1],
  ])
);
