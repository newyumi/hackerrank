// // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');

// function solution(E, L) {
// 	// Implement your solution here

// 	// 입장 2, 최초 1시간 3, 이후 4
// 	// 입차 E, 출차 L

// 	let totalFee = 5; // entrance, first hour

// 	const hours = parseInt(L.substring(0, 2)) - parseInt(E.substring(0, 2));
// 	let minutes = 0;
// 	if (parseInt(L.substring(3, 5)) - parseInt(E.substring(3, 5)) > -1) {
// 			minutes = parseInt(L.substring(3, 5)) - parseInt(E.substring(3, 5));
// 	} else {
// 			minutes = 60 - parseInt(L.substring(3, 5)) + parseInt(E.substring(3, 5));
// 	}

// 	console.log('hours:', hours);
// 	console.log('minutes:', minutes);

// 	let totalMin = hours*60 + minutes;

// 	if (totalMin > 60) {
// 			totalFee = totalFee + (Math.ceil(totalMin/60)*4) - 4;
// 	}

// 	return totalFee;
// }

function solution(E, L) {
  // 입장 2, 최초 1시간 3, 이후 4
  // 입차 E, 출차 L

  const entranceFee = 2;
  const firstHourFee = 3;
  const additionalHourFee = 4;

  // 입차와 출차 시간을 시간과 분으로 분리
  const entryTime = E.split(":").map(Number);
  const exitTime = L.split(":").map(Number);

  // 입차와 출차 시간을 분으로 변환
  const entryMinutes = entryTime[0] * 60 + entryTime[1];
  const exitMinutes = exitTime[0] * 60 + exitTime[1];

  // 주차 시간 계산
  const parkingDuration = exitMinutes - entryMinutes;

  // 주차 비용 계산
  let totalFee = entranceFee;
  if (parkingDuration <= 60) {
    // 최초 1시간인 경우
    totalFee += firstHourFee;
  } else {
    // 최초 1시간 비용 더하기
    totalFee += firstHourFee;

    // 추가 시간 비용 계산
    const additionalHours = Math.ceil((parkingDuration - 60) / 60);
    totalFee += additionalHours * additionalHourFee;
  }

  return totalFee;
}

// note: 입차와 출차 시간 간의 시간 차이를 올바르게 계산해야 합니다. 현재 코드에서는 시간 차이를 정확하게 구하지 못하는 문제가 있습니다.
// 최초 1시간에 대한 비용 계산이 잘못되었습니다. 문제 설명에 따르면 최초 1시간은 3 달러이지만, 현재 코드에서는 5 달러로 계산되고 있습니다.
// conclusion: 코드로도 이해될 수 있게 짜야한다.