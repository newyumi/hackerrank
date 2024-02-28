// 양말 페어 찾기
// int n: 양말의 수, int ar: 각 양말의 색상
// Sample Input, n=9, ar=[10 20 20 10 10 30 50 10 20] 인 경우, Output은 3
// https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  // Write your code here
  // n = count of socks
  // ar = pair of socks

  let paired = {}; // paired socks
  ar.forEach((x) => {
    paired[x] = (paired[x] || 0) + 1; // 중복 개수 구하기
  });
  console.log(paired);
  let result = 0;
  Object.values(paired).map((val) => {
    console.log(val);
    if (val !== 1 && val / 2 > 0) {
      result = result + parseInt(val / 2);
    }
  });

  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const ar = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  const result = sockMerchant(n, ar);

  ws.write(result + "\n");

  ws.end();
}
