function solution(N) {
  const binaryNum = N.toString(2);
  const binaryGaps = binaryNum.slice(binaryNum.indexOf("1") + 1, binaryNum.lastIndexOf("1"));
  const zeroCounted = binaryGaps.split("1").map((zeros) => zeros.length);
  return zeroCounted.length ? Math.max(...zeroCounted) : 0;
}

// 먼저 숫자에 toString() 메소드를 사용하여 2진수 string으로 변환한다.
// 1과 1 사이의 0의 길이만 구해야하기때문에 slice() 메소드를 사용해서 처음에 위치하는 1과 끝에 위치하는 1의 인덱스번호로 문자열을 자른다.
// 잘려진 문자열을 '1'을 기준으로 split한다. 그러면 0만 뭉쳐져서 배열로 만들어지는데 이 때 0의 길이를 추출해서 배열을 만들어 zeroCounted 변수에 저장한다.
// zeroCounted 배열의 가장 큰 숫자가 가장 길이가 긴 0의 길이이므로 리턴한다. 만약 배열의 길이가 0이라면 0을 리턴한다.
