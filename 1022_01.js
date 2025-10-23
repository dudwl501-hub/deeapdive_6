// 모닝 미션, 아래 문제를 풀고, 결과를 캡쳐후 Good-morning 인사하기.

const numbers = [ 3, 17, 21, 30, 9 ];
let result = 0;
// 연습 : numbers의 모든 수를 찍어보시오. (for문 사용)

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// for문을 이용해서, numbers의 각 원소의  총 합을 구하시오.

for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
}
console.log( `${numbers}의 총 합은  ${result} 입니다.`);