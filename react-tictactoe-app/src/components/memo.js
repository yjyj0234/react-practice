import React from 'react'

const memo = () => {
//전개연산자:  특정 객체 또는 배열의 값을 다른 객체, 배열로 복제하거나 옮길 때 사용합니다. 연산자의 모양은 ... 이렇게 생겼습니다.
const obj1 = {
a: 'A',
b: 'B'
}
 const obj2 = {
c: 'C',
d: 'D'
 };
const objWrap = { ... obj1, ... obj2};

console.log(objWrap);

// a: 'A',
// b: 'B',
// c: 'C',
// d: 'D'




//기존 배열을 보존

const arr1 = [1, 2, 3];
const arr2 = arr1.reverse( );

//원본 배열까지 역순으로 변경됨
console.log(arr1); // [3, 2, 1]
console.log(arr2); // [3, 2, 1]

const arr3 = [1, 2, 3];
const arr4 = [ ... arr1].reverse();

console.log(arr3); // [1, 2,3] 원본 배열 유지
console.log(arr4); // [3, 2, 1]





  return (
    <div>
        {objWrap}
    </div>
  )
}

export default memo
