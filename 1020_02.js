const a = 13;
const b = 5;

const sum = a + b; /* a와 b의 더한 값 */
const isEven = a % 2;  
/* a 값이 짝수인지, 짝수라면 true, 홀수라면 false */

console.log(sum);
console.log(isEven);

// sum이라는 함수를 만드는데, x,y 두 값을 더해서, 그 결과값을 리턴하는 함수

function clacsum(x,y) {
    const result = x + y;
    console.log(result) // return result
}

calcsum(3,5);
calcsum(a,b);
calcsum(10,15);

// 아이스크림 만들기 함수,
function createIcecream(syrup, topping) {
    const result = '${syrup} ${topping} 아이스크림이 만들어졌습니다.';
    console.log(result)
}
createIcecream('choco', 'amond')  // 초코아몬드 아이스크림이 만들어졌습니다.
createIcecream('vanila', 'pinnut') // 바닐라피넛 아이스크림이 만들어졌습니다.

