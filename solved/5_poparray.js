function solution(A, K) {
  // Implement your solution here

  let arr = A.slice(); // 배열을 복사하여 변경하지 않도록 함

  while (K > 0) {
    const lastElement = arr.pop(); // 배열의 마지막 요소를 추출
    arr.unshift(lastElement); // 추출한 요소를 배열의 맨 앞에 삽입
    K--; // K 값을 감소시킴
  }
  return arr;
}
