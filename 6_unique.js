// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Algorithmic skills, first unique
function solution(A) {
  // Implement your solution here
  const frequency = {}; // 요소의 등장 빈도를 저장할 객체

  // 배열 A의 각 요소를 순회하며 빈도수를 계산합니다.
  // frequency[A[i]]는 frequency 객체에서 특정 키 A[i]에 해당하는 값을 가져오는 것입니다.
  // 여기서 A[i]는 배열 A의 i번째 요소를 나타냅니다.
  // 즉, frequency[A[i]]는 frequency 객체에서 A의 i번째 요소가 키로 등록되어 있는 값입니다. 
  // 이 값은 해당 요소가 배열 A에서 몇 번 등장했는지를 나타내는 빈도수입니다.

  for (let i = 0; i < A.length; i++) {
    if (frequency[A[i]] === undefined) {
      frequency[A[i]] = 1; // 처음 등장하는 요소인 경우 1로 초기화
    } else {
      frequency[A[i]]++; // 이미 등장한 요소인 경우 빈도수 증가
    }
  }

  // 배열 A를 순회하면서 첫 번째로 빈도수가 1인 요소를 반환합니다.
  for (let i = 0; i < A.length; i++) {
    if (frequency[A[i]] === 1) {
      return A[i]; // 첫 번째로 빈도수가 1인 요소 반환
    }
  }

  return -1; // 유일한 요소가 없는 경우 -1 반환
}

// 참고, 객체에서 값이 1인 객체의 인덱스 구하기
// const keysWithValue1 = Object.keys(obj).filter(key => obj[key] === 1).join(', ');

const A = [1, 4, 3, 3, 1, 2];
console.log(solution(A));
