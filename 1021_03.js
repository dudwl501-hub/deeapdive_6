// for ...of 예시문 5개

// 예제1.
const fruits = ['apple', 'banana', 'cherry', 'melon', 'orange'];

for (const fruit of fruits) {
    console.log(fruit);
}

// 예제2.
const word = "Hello";

for (let letter of word) {
  console.log(letter);
}

// 예제3.
const colors = new Set(['red', 'green', 'blue']);

for (let color of colors) {
  console.log(color);
}

// 예제4.
const numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
  console.log(number * 2);
}

// 예제5.
const mixedArray = [1, 'two', 3, 'four', 5];

for (let item of mixedArray) {
  console.log(item);
}   


// for 구문 예재 5개

// 예제1.
for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
}

// 예제2.
const sumLimit = 10;
let sum = 0;

for (let i = 1; i <= sumLimit; i++) {
    sum += i;
}
console.log("Sum from 1 to " + sumLimit + " is: " + sum);

// 예제3.
const factorialNum = 5;
let factorial = 1;

for (let i = 1; i <= factorialNum; i++) {
    factorial *= i;
}
console.log("Factorial of " + factorialNum + " is: " + factorial);

// 예제4.
const evenNumbers = [];

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
    }
}
console.log("Even numbers from 1 to 20: " + evenNumbers.join(", "));

// 예제5.
const stars = 5;

for (let i = 1; i <= stars; i++) {
    let starLine = '';
    for (let j = 1; j <= i; j++) {
        starLine += '*';
    }
    console.log(starLine);
}   