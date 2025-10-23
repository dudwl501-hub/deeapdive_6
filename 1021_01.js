const a = 'hello';
const b = 3;

const c = a + b; // "hello3"
const d = "5";

console.log(b + d); // "35"  (숫자+문자 → 문자열 결합)
console.log(b * d); // 15    (문자열*숫자 → 숫자로 변환)
console.log(a * b); // NaN   ("hello"는 숫자로 변환 불가)

let e; // let/const 선언은 TDZ가 있으므로, 선언 이전 접근은 에러.
console.log("e :", e); // undefined (선언 이후라 OK)

const f = null;
console.log("f :", f); // null

// 함수 선언은 완전 호이스팅 → 선언 전에 호출 가능
function sum(a, b) {
  return a + b;
}
console.log(sum(3, 5)); // 8

// 함수 표현식은 TDZ에 걸림 → 반드시 선언 후 호출
const remainer = function(a, b) {
  return a % b;
};
console.log(remainer(5, 3)); // 2

const fruits = ['banana', 'melon', 'watermelon'];
console.log(fruits[0]); // banana
console.log(fruits[1]); // melon
console.log(fruits[2]); // watermelon

console.log(10 * "hello"); // NaN

