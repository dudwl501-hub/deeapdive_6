// 상황연산자
// ___1___ ? ___2___ : ___3___
// ___1___ 조건식
// ___2___ 조건식이 참일 때 실행되는 값 또는 문장
// ___3___ 조건식이 거짓일 때 실행되는 값 또는 문장

const a = 5;
const result = a%2 === 0 ? "짝수" : "홀수";

console.log(result); 

// b가 10보다 큰지, 작은지를 판별하는 식을 입력하세요.
// b는 10보다 크다, b는 10보다 작다.

const b = 7;
const result2 = b > 10 ? "b는 10보다 크다" : "b는 10보다 작다";

console.log(result2);

// 내가 입력한 수가 10보다 큰지를 매번 판별

function overTen(number) {
    const inOver= number > 10 ? "10보다 크다" : "10보다 작다";
    console.log(inOver);
}

overTen(13);
overTen(3);
overTen(5);
overTen(-1);

// 직사각형의 크기를 구하는 함수(가로, 세로)

function getRectArea(width, height) {
    const area = width * height;
    console.log(`직사각형의 크기는 ${area}입니다.`);
}

getRectArea(2,3);
getRectArea(5,5);
getRectArea(4,6);
getRectArea(10,3);

// 입력받은 유저의 나이가 성인인지 미성년인지 판별하시오.

function isAdult(age) {
    const result = age >= 18 ? "성인입니다." : "미성년자입니다.";
    console.log(result);
}

isAdult(20);
isAdult(15);
isAdult(18);
isAdult(7);

// 학생의 성적표를 받아서, 평균을 구하시오.

function getAverage(kor, eng, math) {
    const average = (kor + eng + math) / 3;
    console.log(`평균 점수는 ${average}점 입니다.`);
}

getAverage(80, 90, 100);
getAverage(70, 60, 50);
getAverage(100, 100, 100);
getAverage(30, 40, 50);

// 아이디와 패스워드를 검증하여, '로그인 성공', '로그인 실패'를 출력하시오.

function checkLogin(id, password) {
    const result = (id === "ghost" & password === "1234") ? "로그인 성공" : "로그인 실패";
    console.log(result);
}

checkLogin("ghost", "1234");
checkLogin("user", "abcd");
checkLogin("ghost", "abcd");
checkLogin("admin", "1234");

// 원의 넓이를 구하는 함수

function getCircleArea(radius) {
    const area = Math.PI * radius * radius;
    console.log(`반지름이 ${radius}인 원의 넓이는 ${area}입니다.`);
}

getCircleArea(3);
getCircleArea(5);
getCircleArea(10);
getCircleArea(7);

// 할인률 적용해 최종 가격 구하기

function calcDiscount(price, discount) {
    const finalPrice = price - (price * discount / 100);
    console.log(`원래 가격은 ${price}원에서 ${discount}% 할인되어, 최종 가격은 ${finalPrice}원 입니다.`);
}

calcDiscount(10000, 10);
calcDiscount(5000, 20);
calcDiscount(20000, 15);
calcDiscount(15000, 5);

// 두 수를 나눈 후 나머지 값 구하기

function getRemainder(num1, num2) {
    const remainder = num1 % num2;
    console.log(`${num1}을 ${num2}로 나눈 나머지는 ${remainder}입니다.`);
}

getRemainder(10, 3);
getRemainder(25, 7);
getRemainder(14, 5);
getRemainder(9, 4);


// 사각형의 둘레를 구하는 함수

function getRectPerimeter(width, height) {
    const perimeter = 2 * (width + height);
    console.log(`가로 ${width}cm, 세로 ${height}cm인 사각형의 둘레는 ${perimeter}cm입니다.`);
}

getRectPerimeter(4, 6);
getRectPerimeter(10, 15);
getRectPerimeter(7, 3);
getRectPerimeter(5, 9);

// 60점 이상이면 합격, 미만이면 불합격 출력하는 함수

function checkPass(score) {
    const result = score >= 60 ? "합격" : "불합격";
    console.log(`${score}점은 ${result}입니다.`);
}

checkPass(75);
checkPass(50);
checkPass(60);
checkPass(89);


// 나이와 거주지에 따라 이벤트 참여가능 여부 판단 함수

function canJoinEvent(age, Residence) {
    const result = (age >= 20 && Residence === "서울") ? "가능" : "불가능";
    console.log(`나이 ${age}세, 거주지 ${Residence} 거주자인 당신은 이벤트에 참여 ${result}입니다.`);
}

canJoinEvent(25, "서울");
canJoinEvent(18, "대전");
canJoinEvent(30, "부산");
canJoinEvent(22, "서울");


// 연령과 부모님 동반 여부로 영화 시청 가능 여부 판단 함수

function canWatchMovie(age, withParent) {
    const result = (age >= 15   || withParent === true) ? "영화 시청 가능" : "영화 시청 불가능";
    console.log(`${age}세, 부모님 동반 여부: ${withParent} -> ${result}입니다.`);
}

canWatchMovie(16, false);
canWatchMovie(14, true);
canWatchMovie(12, false);
canWatchMovie(20, false);



// 주말을 판별하는 함수

function isWeekend(day) {
    const result = (day === "토요일" || day === "일요일") ? "주말입니다." : "평일입니다.";
    console.log(`${day}은 ${result}`);
}

isWeekend("월요일");
isWeekend("토요일");
isWeekend("수요일");
isWeekend("일요일");    


