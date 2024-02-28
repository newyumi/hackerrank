const graph = {
  1: [2, 3],
  2: [4, 5],
  3: [],
  4: [],
  5: [],
};

// BFS 함수
function bfs(graph, start) {
  const visited = {}; // 방문한 노드를 저장할 객체
  const queue = [start]; // 큐를 사용하여 탐색할 노드를 관리

  visited[start] = true; // 시작 노드를 방문 처리

  while (queue.length) {
    const vertex = queue.shift(); // 큐의 맨 앞에서 노드를 추출
    console.log(vertex); // 현재 노드 출력

    // 현재 노드와 인접한 모든 미방문 노드를 큐에 추가하고 방문 처리
    for (const neighbor of graph[vertex]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
}

// DFS 함수
function dfs(graph, start, visited = {}) {
  console.log(start); // 현재 노드 출력
  visited[start] = true; // 현재 노드를 방문 처리

  // 현재 노드와 인접한 모든 미방문 노드를 재귀적으로 탐색
  for (const neighbor of graph[start]) {
    if (!visited[neighbor]) {
      dfs(graph, neighbor, visited);
    }
  }
}

console.log("BFS:");
// bfs(graph, 1);

console.log("DFS:");
dfs(graph, 1);

// Tree 높이 구하는 DFS
function solution(T) {
  if (T === null) {
    return -1; // 빈 트리는 높이가 -1입니다.
  }

  // 왼쪽 서브트리와 오른쪽 서브트리의 높이를 재귀적으로 계산하여 
  // 둘 중 더 큰 값을 선택하고 1을 더해 현재 노드의 높이를 반환합니다.
  return Math.max(solution(T.l), solution(T.r)) + 1;
}

// 예제 트리
const exampleTree = {
  x: 5,
  l: {
    x: 3,
    l: {
      x: 20,
      l: null,
      r: null,
    },
    r: {
      x: 21,
      l: null,
      r: null,
    },
  },
  r: {
    x: 10,
    l: {
      x: 1,
      l: null,
      r: null,
    },
    r: null,
  },
};

console.log(solution(exampleTree)); // 출력: 2
