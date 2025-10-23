// animals라는 변수에 동물이름을 5가지 입력하여 배열변수를 만들고, 3번째 동물이름을 출력하시오.

const animals = ['rabbit', 'cat', 'puppy', 'elephant', 'tiger'];
console.log(animals[2]);    

for (const animal of animals) {
    console.log(animal); // for...of 문을 사용하여 배열의 모든 요소 출력
}  

/* 
for(초기화 ; 조건식 ; 증감식) {
    실행문
}
*/

// 0부터 4까지를 출력하겠다.
for(let i=1; i < 5; i++) {
    console.log(i);
}

/**
 * for문을 사용하여 animals 배열의 모든 요소를 출력하시오. 1. 동물 이런 식으로 출력하라
 *   
 */

for (let i = 0; i < 5; i++) {  
  console.log((i + 1) + ". " + animals[i]);
}

