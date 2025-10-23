const a = 'hello'
const b = 3;

const c =a + b; // c의 데이터 타입은 뭘까요? 문자열 + 넘버 ===> 문자열 자동형변환
const d = "5";

console. log(b + d);
console. log(b * d); // 문자열 * 넘버 -> 넘버
console. log(a * b); // 문자열 * 넘버 -> NaN

const e: // const, let 변수 선언, 값을 지정하지 않았다.