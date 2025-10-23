const math = 80;

// math 점수가 65점 이상이면 합격, 아니면 탈락
let result = math >= 65 ? "pass" : "nonpass";

console.log(`math : ${result}`);

const eng =45;

if (eng >= 65) {
    result = "pass"; }
    else {
    result = "nonpass";
    }

console.log(`english : ${result}`);

const average = (math + eng) /2;
// 평균 점수가 90점 이상이면 'A', 80점 이상이면 'B', 70점 이상이면 'C', 그 미만일 경우 'F'

if (average >= 90) {
    result = "A"; }
    else if (average >= 80) {
    result = "B"; }
    else if (average >= 70) {
    result = "C"; }
    else {
    result = "F"; }

console.log(`average : ${result}`);

