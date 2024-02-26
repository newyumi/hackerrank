## javascript array method

pop()
배열 뒷부분의 값을 삭제

```
var arr = [ 1, 2, 3, 4 ];
arr.pop();
console.log( arr ); // [ 1, 2, 3 ]
```

push()
배열 뒷부분에 값을 삽입

```
var arr = [ 1, 2, 3, 4 ];
arr.push( 5 );
console.log( arr ); // [ 1, 2, 3, 4, 5 ]
```

unshift()
배열 앞부분에 값을 삽입

```
var arr = [ 1, 2, 3, 4 ];
arr.unshift( 0 );
console.log( arr ); // [ 0, 1, 2, 3, 4 ]
```

shift()
배열 앞부분의 값을 삭제

```
var arr = [ 1, 2, 3, 4 ];
arr.shift();
console.log( arr ); // [ 2, 3, 4 ]
```

splice()
배열의 특정위치에 요소를 추가하거나 삭제
splice( index, 제거할 요소 개수, 배열에 추가될 요소 )

```
var arr = [ 1, 2, 3, 4, 5, 6, 7 ];
arr.splice( 3, 2 );
console.log( arr ); // [ 1, 2, 3, 6, 7 ]   3번째 인덱스에서부터 2개 제거

var arr = [ 1, 2, 3, 4, 5, 6, 7 ];
arr.splice( 2, 1, "a", "b");
console.log( arr ); // [ 1, 2, "a", "b", 4, 5, 6, 7 ] 2번째 인덱스에서 1개 제거 후 "a"와 "b"를 추가
```

slice(startIndex, endIndex)
배열의 startIndex부터 endIndex까지(endIndex는 불포함)에 대한 shallow copy를 새로운 배열 객체로 반환

```
var arr = [ 1, 2, 3, 4, 5, 6, 7 ];
var newArr = arr.slice( 3, 6 );
console.log( 'slice',  newArr ); // [ 4, 5, 6 ]
```

concat()
다수의 배열을 합치고 병합된 배열의 사본을 반환

```
var arr1 = [ 1, 2, 3 ];
var arr2 = [ 4, 5, 6 ];
var arr3 = arr2.concat( arr1 );
console.log( arr3 ); // [ 4, 5, 6, 1, 2, 3 ]
```

every()
배열의 모든 요소가 제공한 함수로 구현된 테스트를 통과하는지를 테스트

```
var arr =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var isEven = function( value ) {

  // value가 2의 배수이면 true를 반환한다.
  return value % 2 === 0;
};
console.log( arr.every( isEven ) ); // false  모든 요소가 true이면 true를 return 하고 그렇지 않으면 false
```

some()
지정된 함수의 결과가 true일 때까지 배열의 각 원소를 반복

```
var arr =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var isEven = function( value ) {

  // value가 2의 배수이면 true를 반환한다.
  return value % 2 === 0;
};
console.log( arr.some( isEven ) ); // true  하나라도 true이면 true를 return
```

forEach()
배열의 각 원소별로 지정된 함수를 실행한다.

```
var arr =[ 1, 2, 3 ];
arr.forEach( function( value ) {
  console.log( value );   // 1 2 3
});
```

map()
배열의 각 원소별로 지정된 함수를 실행한 결과로 구성된 새로운 배열을 반환한다.

```
var arr =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var isEven = function( value ) {
  return value % 2 === 0;
};
var newArr = arr.map( isEven );
console.log( newArr ); // [ false, true, false, true, false, true, false, true, false, true ]
```

filter()
지정된 함수의 결과 값을 true로 만드는 원소들로만 구성된 별도의 배열을 반환한다.

```
var arr =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var isEven = function( value ) {
  return value % 2 === 0;
};
var newArr = arr.filter( isEven );
console.log( newArr ); // [ 2, 4, 6, 8, 10 ]
```

reduce()
누산기(accumulator) 및 배열의 각 값(좌에서 우로)에 대해 (누산된) 한 값으로 줄도록 함수를 적용

```
var arr =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var value = arr.reduce( function( previousValue, currentValue, index ) {
  return previousValue + currentValue;
});
console.log( value ); // 55
```

reverse()
배열의 원소 순서를 거꾸로 바꾼다.

```
var arr =[ 1, 2, 3, 4 ];
arr.reverse();
console.log( arr ); // [ 4, 3, 2, 1 ]
```

sort()
배열의 원소를 알파벳순으로, 또는 지정된 함수에 따른 순서로 정렬한다. 모든 원소를 문자열로 취급해 사전적으로 정렬

```
var arr = [ 13, 12, 11, 10, 5, 3, 2, 1 ];
arr.sort();
console.log( arr ); // [ 1, 10, 11, 12, 13, 2, 3, 5 ];

// sort에 함수로 정렬
var arr = [ 13, 12, 11, 10, 5, 3, 2, 1 ];
arr.sort( function( a, b ) {
  return a - b;
})
console.log( arr ); // [ 1, 2, 3, 5, 10, 11, 12, 13 ]
```

toString()
배열을 문자열로 바꾸어 반환한다, toString(2) 이진수 스트링으로 변환

```
var arr =[ 1, 2, 3, 4 ];
console.log( arr.toString() ); // 1, 2, 3, 4
```

valueOf()
toString과 비슷, 그러나 배열을 반환

```
var arr =[ 1, 2, 3, 4 ];
console.log( arr.valueOf() ); // [ 1, 2, 3, 4 ]
```

join()
배열 원소 전부를 하나의 문자열로 합친다.

```
var arr =[ 1, 2, 3, 4 ];
console.log( arr.join() );      // 1,2,3,4
console.log( arr.join( '-' ) ); // 1-2-3-4
```

자료 출처: Learning JavaScript Data Structures and Algorithms 한국어판 [자바스크립트 자료 구조와 알고리즘] http://www.acornpub.co.kr/book/javascript-data-structure

## javascript object method

Object.keys()
객체가 가지고 있는 키들의 목록을 배열로 리턴하는 메서드이다.

```
const obj = {
  name: 'melon',
  weight: 4350,
  price: 16500,
  isFresh: true
}

Object.keys(obj) // ['name', 'weight', 'price', 'isFresh']
```

Object.values()
객체의 키가 아닌 값으로 이루어진 배열을 리턴합니다.

Object.entries()
객체의 키와 값의 쌍으로 이루어진 길이 2짜리 배열로 이루어진, 배열을 리턴합니다.
각 배열에서 인덱스 [0]의 값은 각각의 키를, 인덱스 [1]의 값은 해당 키에 해당하는 값을 가지게 됩니다.

```
const values = Object.values(obj)
// values === ['melon', 4350, 16500, true]

const entries = Object.entries(obj)

/*
entries === [
  ['name', 'melon'],
  ['weight', 4350],
  ['price', 16500],
  ['isFresh', true]
]
*/
```

## Math 객체 메서드

Math.max(), Math.min(): 주어진 숫자 중 가장 큰 값 또는 작은 값 반환합니다.
Math.abs(): 숫자의 절대값을 반환합니다.
Math.floor(), Math.ceil(), Math.round(): 소수점 이하를 버리거나 올림, 반올림합니다.
Math.random(): 0부터 1 사이의 난수를 반환합니다.

### JS에서 값 입력시

```javascript
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input1.shift().split(" ").map(Number);
// const input = JSON.parse(JSON.stringify(input1)); 깊은 복사

// 1. 하나의 값을 입력받을 때
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

// 3. 여러 줄의 값들을 입력받을 때
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);

// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// 6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
// ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
const n = input[0];
const n_arr = input.slice(1, n + 1);
const [m, ...m_arr] = input.slice(n + 1);

// 2~6에서 입력받는 값들을 모두 String에서 Number로 바꾸려면 split()뒤에 .map(Number)를 추가
```

## 이진탐색

이진 탐색(Binary Search)은 정렬된 배열에서 특정한 값의 위치를 찾는 알고리즘입니다. 이 알고리즘은 배열을 반으로 나누어 탐색 범위를 줄여가면서 값을 찾아내는 효율적인 방법입니다. 이진 탐색은 주어진 배열이 정렬되어 있어야만 사용할 수 있습니다.

아래는 이진 탐색 알고리즘의 기본적인 구현입니다:

```javascript
function binarySearch(arr, target) {
  let left = 0; // 배열의 왼쪽 끝 인덱스
  let right = arr.length - 1; // 배열의 오른쪽 끝 인덱스

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // 중간 인덱스 계산

    if (arr[mid] === target) {
      return mid; // 값을 찾았을 때 중간 인덱스 반환
    } else if (arr[mid] < target) {
      left = mid + 1; // 중간 값보다 큰 경우, 왼쪽 범위를 조정
    } else {
      right = mid - 1; // 중간 값보다 작은 경우, 오른쪽 범위를 조정
    }
  }

  return -1; // 값을 찾지 못한 경우 -1 반환
}
```

위의 코드에서 `arr`은 정렬된 배열이며, `target`은 찾고자 하는 값입니다. 이진 탐색은 배열의 왼쪽 끝 인덱스 `left`와 오른쪽 끝 인덱스 `right`를 사용하여 탐색 범위를 조정합니다. 각 반복에서 중간 인덱스 `mid`를 계산하고, 해당 인덱스의 값과 `target`을 비교하여 탐색 범위를 조정합니다.

이진 탐색의 시간 복잡도는 O(log n)입니다. 이는 배열의 크기에 대해 로그 시간으로 탐색을 수행하기 때문에 매우 효율적입니다.

### unshift() 배열의 맨 앞의 값을 추가

### shift() 배열의 맨 앞의 값을 제거

## BFS - Breadth First Search

## DFS - Depth First Search

자바스크립트로 BFS(Breadth-First Search)와 DFS(Depth-First Search) 함수를 구현해 보겠습니다.
먼저, 간단한 그래프 구조를 표현하기 위해 인접 리스트를 사용하겠습니다.

```javascript
// BFS: 너비 우선 탐색
function bfs(root) {
  const queue = [root]; // 큐를 이용하여 방문할 노드를 유지
  const visited = new Set(); // 방문한 노드를 추적하기 위한 Set

  while (queue.length > 0) {
    const node = queue.shift(); // 큐에서 첫 번째 요소 추출
    if (!visited.has(node)) {
      visited.add(node); // 방문한 노드를 기록
      console.log(node); // 노드를 방문할 때마다 출력

      // 노드의 자식(이웃) 노드를 큐에 추가
      if (node.children) {
        for (const child of node.children) {
          queue.push(child);
        }
      }
    }
  }
}

// DFS: 깊이 우선 탐색
function dfs(node, visited = new Set()) {
  if (!node || visited.has(node)) {
    return; // 노드가 null이거나 이미 방문한 노드인 경우 종료
  }

  visited.add(node); // 방문한 노드를 기록
  console.log(node); // 노드를 방문할 때마다 출력

  // 노드의 자식(이웃) 노드를 재귀적으로 방문
  if (node.children) {
    for (const child of node.children) {
      dfs(child, visited);
    }
  }
}

// 예제 노드 정의
const node1 = {
  val: 1,
  children: [
    { val: 2, children: [{ val: 4 }] },
    { val: 3, children: [{ val: 5 }] },
  ],
};

console.log("BFS:");
bfs(node1);
console.log("\nDFS:");
dfs(node1);
```

위 코드에서는 간단한 인접 리스트로 그래프를 표현하고, BFS 함수와 DFS 함수를 구현했습니다.
각 함수는 그래프와 시작 노드를 입력으로 받습니다.
BFS 함수는 큐를 사용하여 너비 우선 탐색을 수행하고, DFS 함수는 재귀적으로 깊이 우선 탐색을 수행합니다.

```javascript
// BFS와 DFS의 핵심 로직이 동일한 함수
function search(root, isBFS = true) {
  const queueOrStack = [root]; // 큐 또는 스택을 이용하여 방문할 노드를 유지
  const visited = new Set(); // 방문한 노드를 추적하기 위한 Set

  while (queueOrStack.length > 0) {
    const node = isBFS ? queueOrStack.shift() : queueOrStack.pop(); // 큐 또는 스택에서 요소 추출
    if (!visited.has(node)) {
      visited.add(node); // 방문한 노드를 기록
      console.log(node); // 노드를 방문할 때마다 출력

      // 노드의 자식(이웃) 노드를 큐 또는 스택에 추가
      if (node.children) {
        for (const child of node.children) {
          isBFS ? queueOrStack.push(child) : queueOrStack.unshift(child);
        }
      }
    }
  }
}

// 예제 노드 정의
const node1 = {
  val: 1,
  children: [
    { val: 2, children: [{ val: 4 }] },
    { val: 3, children: [{ val: 5 }] },
  ],
};

console.log("BFS:");
search(node1, true);
console.log("\nDFS:");
search(node1, false);
```

## 시간 복잡도

O는 시간 복잡도(알고리즘의 실행 시간)를 나타내는 표기법 중 하나입니다. 알고리즘이 입력 크기에 따라 실행 시간이 어떻게 증가하는지를 나타냅니다. 보통 최악의 경우를 고려하여 표현됩니다.

- Big O 표기법(O): 알고리즘의 실행 시간이 입력 크기에 대해 얼마나 증가하는지를 나타냅니다.
- O(1): 상수 시간, 입력 크기에 관계없이 일정한 시간이 소요됩니다.
- O(log n): 로그 시간, 입력 크기의 로그에 비례하는 시간이 소요됩니다. 예를 들어 이진 탐색 알고리즘이 이에 해당합니다.
- O(n): 선형 시간, 입력 크기에 비례하는 시간이 소요됩니다.
- O(n log n): 선형 로그 시간, 입력 크기에 로그에 비례하게 증가하는 시간이 소요됩니다. 예를 들어 퀵 정렬과 병합 정렬이 이에 해당합니다.
- O(n^2): 제곱 시간, 입력 크기의 제곱에 비례하는 시간이 소요됩니다. 이중 반복문을 사용하는 정렬 알고리즘이 이에 해당합니다.
- O(2^n): 지수 시간, 입력 크기의 지수에 비례하는 시간이 소요됩니다. 재귀적인 경우가 대표적입니다.
- O(n!): 팩토리얼 시간, 입력 크기의 팩토리얼에 비례하는 시간이 소요됩니다. 매우 비효율적인 알고리즘입니다.

DFS와 BFS의 시간 복잡도는 다음과 같습니다:

- DFS(Depth-First Search): 인접 리스트를 사용할 경우 O(V + E)의 시간 복잡도를 갖습니다. V는 노드 수이고, E는 간선 수입니다.
- BFS(Breadth-First Search): 인접 리스트를 사용할 경우 O(V + E)의 시간 복잡도를 갖습니다. V는 노드 수이고, E는 간선 수입니다.

### 효율적인 정렬 알고리즘 3개

1. **병합 정렬 (Merge Sort)**:

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
```

2. **퀵 정렬 (Quick Sort)**:

```javascript
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
```

3. **힙 정렬 (Heap Sort)**:

```javascript
function heapSort(arr) {
  buildMaxHeap(arr);

  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    maxHeapify(arr, 0, i);
  }

  return arr;
}

function buildMaxHeap(arr) {
  const len = arr.length;
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    maxHeapify(arr, i, len);
  }
}

function maxHeapify(arr, i, len) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    maxHeapify(arr, largest, len);
  }
}
```

이 코드들은 각각의 정렬 알고리즘을 구현한 것입니다.
각 함수에 정렬하고자 하는 배열을 인자로 전달하면 해당 알고리즘에 따라 정렬된 배열을 반환합니다.

그리디 알고리즘은 각 단계에서 가장 최적인 선택을 하는 방식으로 동작합니다. 그렇기 때문에 각 단계에서 선택할 수 있는 가장 좋은 선택을 고르는 것이 중요합니다. 아래는 간단한 예시로 그리디 알고리즘을 활용하여 활동 선택 문제(Activity Selection Problem)를 해결하는 코드입니다.

### 활동 선택 문제 (Activity Selection Problem)

활동 선택 문제는 여러 활동이 주어졌을 때, 겹치지 않게 가장 많은 활동을 선택하는 문제입니다. 각 활동은 시작 시간과 끝 시간이 주어지며, 서로 겹치지 않게 최대한 많은 활동을 선택해야 합니다.

```javascript
function activitySelection(activities) {
  // 활동을 끝나는 시간을 기준으로 정렬
  activities.sort((a, b) => a.end - b.end);

  const selectedActivities = [activities[0]]; // 첫 번째 활동은 무조건 선택

  let prevEnd = activities[0].end;

  for (let i = 1; i < activities.length; i++) {
    const currentActivity = activities[i];

    // 현재 활동이 이전 활동과 겹치지 않는 경우에 선택
    if (currentActivity.start >= prevEnd) {
      selectedActivities.push(currentActivity);
      prevEnd = currentActivity.end;
    }
  }

  return selectedActivities;
}

// 활동 선택 문제에 대한 예시 입력 데이터
const activities = [
  { start: 1, end: 4 },
  { start: 3, end: 5 },
  { start: 0, end: 6 },
  { start: 5, end: 7 },
  { start: 3, end: 8 },
  { start: 5, end: 9 },
  { start: 6, end: 10 },
  { start: 8, end: 11 },
  { start: 8, end: 12 },
  { start: 2, end: 13 },
  { start: 12, end: 14 },
];

// 활동 선택 문제 해결
const selectedActivities = activitySelection(activities);
console.log("Selected activities:", selectedActivities);
```

위의 코드는 활동 선택 문제를 그리디 알고리즘으로 해결하는 방법을 보여줍니다. 활동을 끝나는 시간을 기준으로 정렬한 후, 각 단계에서 가장 빨리 끝나는 활동을 선택하여 최대한 많은 활동을 선택합니다.

```javascript
// 20개의 배열 생성 시 각 값이 index인 배열
const stringArray = Array.from({ length: 20 }, (_, index) => index.toString());
```
