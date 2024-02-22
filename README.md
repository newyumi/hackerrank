1. 양말 페어 찾기

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
배열을 문자열로 바꾸어 반환한다

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

자료 출처: Learning JavaScript Data Structures and Algorithms 한국어판 [자바스크립트 자료 구조와 알고리즘]
http://www.acornpub.co.kr/book/javascript-data-structure

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