
const numbers = [32, 20, 5, 12, 0, 45];

const str = 'Hello, World';

//numbers 변수에서 홀수만 출력하세요 for, if 문 중첩사용

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
        console.log(numbers[i])
    }
}

// str 변수의 길이를 출력하세요

console.log(str.length)

// numbers의 변수안의 모든 값을 더한 총합을 출력하세요

let sum = 0

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

console.log(sum)

//numbers 변수안의 값중에 20이상의 숫자의 개수를 출력하시오.

let count = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 20) {
        count++
    }
}

console.log(count)

