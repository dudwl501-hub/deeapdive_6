// 논리연산자(&&, ||, !) 3가지를 활용한 다양한 Javascript 문제 5개를 만들고, 풀이를 같이 적어주세요. 

// 예제1. && 활용
function checkpass(age, hasID) {
    const result = (age >= 18 && hasID) ? "입장가능" : "입장불가능";
    console.log(result);
}

checkpass(20, true);  // 입장가능
checkpass(16, true);  // 입장불가능
checkpass(22, false); // 입장불가능
checkpass(17, false); // 입장불가능

// 예제2. || 활용
function canWatchMovie(age, withParent) {
    const result = (age > 13 || withParent) ? "영화 시청 가능" : "영화 시청 불가능";
    console.log(result);
}

canWatchMovie(15, false); // 영화 시청 가능
canWatchMovie(12, true);  // 영화 시청 가능
canWatchMovie(10, false); // 영화 시청 불가능
canWatchMovie(14, false); // 영화 시청 가능

// 예제3. &&, || 활용
function graduateEligibility(전공필수, 학점, 봉사시간) {
    const result = (전공필수 && 학점 >= 2.8 && 봉사시간 >= 30) ? "졸업 가능" : "졸업 불가능";
    console.log(result);
}

graduateEligibility(true, 3.0, 40);  // 졸업 가능
graduateEligibility(true, 2.5, 50);  // 졸업 불가능
graduateEligibility(false, 3.2, 20); // 졸업 불가능
graduateEligibility(true, 2.9, 30);  // 졸업 가능

// 예제4. || 활용
function canApplyJob(experienceYears, hasDegree) {
    const result = (experienceYears >= 4 || hasDegree) ? "지원 가능" : "지원 불가능";
    console.log(result);
}

canApplyJob(5, false); // 지원 가능
canApplyJob(2, true);  // 지원 가능
canApplyJob(1, false); // 지원 불가능
canApplyJob(3, true);  // 지원 가능

// 예제5. ! 활용

function isNotWeekend(day) {
    const result = !(day === "토요일" || day === "일요일") ? "평일입니다." : "주말입니다.";
    console.log(result);
}

isNotWeekend("월요일"); // 평일입니다.
isNotWeekend("토요일"); // 주말입니다.
isNotWeekend("수요일"); // 평일입니다.
isNotWeekend("일요일"); // 주말입니다.  