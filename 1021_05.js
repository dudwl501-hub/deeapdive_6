// 논리연산자(&&, ||, !) 3가지를 활용한 다양한 Javascript 문제 5개를 만들고, 풀이를 같이 적어주세요. 

// 예제1. ! 활용

function isEvenNumber(number) {
    const result = !(number % 2 !== 0) ? "짝수입니다." : "홀수입니다.";
    console.log(result);
}

isEvenNumber(4); // 짝수입니다.
isEvenNumber(7); // 홀수입니다.
isEvenNumber(0); // 짝수입니다.
isEvenNumber(-3); // 홀수입니다.

// 예제2. && 활용

function canDrive(age, hasLicense) {
    const result = (age >= 18 && hasLicense) ? "운전 가능" : "운전 불가능";
    console.log(result);
}

canDrive(20, true);  // 운전 가능
canDrive(16, true);  // 운전 불가능
canDrive(22, false); // 운전 불가능
canDrive(17, false); // 운전 불가능

// 예제3. | | 활용

function lovechildren( 엄마사랑, 아빠사랑) {
    const result = (엄마사랑 || 아빠사랑) ? "행복한 아이" : "외로운 아이";
    console.log(result);
}

lovechildren(true, false); // 행복한 아이
lovechildren(false, true);  // 행복한 아이
lovechildren(false, false); // 외로운 아이
lovechildren(true, true);   // 행복한 아이

// 예제4. &&, || 활용

function canAttendEvent(age, hasInvitation, isMember) {
    const result = (age >= 18 && (hasInvitation || isMember)) ? "이벤트 참석 가능" : "이벤트 참석 불가능";
    console.log(result);
}

canAttendEvent(20, true, false);  // 이벤트 참석 가능
canAttendEvent(16, true, true);   // 이벤트 참석 불가능
canAttendEvent(22, false, true);  // 이벤트 참석 가능
canAttendEvent(17, false, false); // 이벤트 참석 불가능

// 예제5. !, && 활용

function isWeekday(day, isHoliday) {
    const result = !(day === "토요일" || day === "일요일") && !isHoliday ? "평일입니다." : "휴일입니다.";   
    console.log(result);
}

isWeekday("월요일", false); // 평일입니다.
isWeekday("토요일", false); // 휴일입니다.
isWeekday("수요일", true);  // 휴일입니다.
isWeekday("일요일", true);  // 휴일입니다.


