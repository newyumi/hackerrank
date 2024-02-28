// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Total score 10/100, it is needed to solve it later.

function solution(K, C, D) {
  // Implement your solution here

  // K = 세탁 가능한 양말 수
  // N clean = C, M dirty = D
  // return 가져갈 수 있는 양말 최대값
  // 예시 K = 2, C = [1, 2, 1, 1] and D = [1, 4, 3, 2, 4]
  // return 3

  const clean = {};
  const dirty = {};
  let paired = 0;
  const rest = [];

  C.forEach((x) => {
    clean[x] = (clean[x] || 0) + 1;
  });

  D.forEach((x) => {
    dirty[x] = (dirty[x] || 0) + 1;
  });

  console.log("clean:", clean);
  console.log("dirty:", dirty);

  for (var i = 0; i < Object.keys(clean).length; i++) {
    paired = paired + Math.floor(Object.values(clean)[i] / 2);
    rest.push(Object.keys(clean)[i]);
  }

  console.log("paired:", paired);
  console.log("rest:", rest);

  let cleanSocks = 0;
  for (let i = 0; i < K; i++) {
    console.log("i:", i);
    rest.map((val, index) => {
      if (parseInt(Object.keys(dirty)[val]) % 2 === 1) {
        cleanSocks++;
      }
    });
  }
  console.log("result:", paired + cleanSocks);
  return paired + cleanSocks;
}

// Example usage
solution(2, [1, 2, 1, 1], [1, 4, 3, 2, 4]);
