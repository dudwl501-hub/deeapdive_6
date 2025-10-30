//배열

const animals = ["lion", "tiger", "puppy", "parrot", "cat"];

for (let animal of animals) {
    console.log(animal);
}

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

console.clear();

animals.forEach( (animal, idx) => {
    console.log(`${idx}. ${animal}`)
})

//40 이상만 출력

const numbers = [ 10, 20, 30, 40, 50]

for (let number of numbers) {
    if (number >= 40) {
        console.log(number)
    }
}

// forEach로 에서도 사용 40 이상의 인덱스 번호만 

numbers.forEach( (number, idx) => {
    if (number >= 40) {
        console.log(idx)
    }
})

const words = [ "hamburger", "milk", "coffee", "juice", "chocolage cookie"]
words.forEach( (word) => {
    if (word.length >= 6) {
        console.log(word)
    }
});







