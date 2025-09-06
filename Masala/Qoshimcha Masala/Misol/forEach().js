// forEach()
// 1-misol
const numbers = [2, 5, 8, 3, 10];
const kvadratSonlar = []

numbers.forEach(num => {
    kvadratSonlar.push(num ** 2)
})

console.log(kvadratSonlar);

// 2-misol
const words = ["olma", "banan", "anjir", "shaftoli", "nok"]; // So'zlar massivi
let longestWord = ''

words.forEach(word => {
    if (word.length > longestWord.length) {
        longestWord = word
    }
})

console.log(longestWord);

// 3-misol
const number = [10, 15, 20, 25, 30];
let ortaQiymat = []
let a = 0
let i = 0
number.forEach(num => {
    a = a + num
    i++
})
ortaQiymat.push(a / i)

console.log(ortaQiymat);

// 4-misol
const users = [
    { name: "Ali", age: 25 },
    { name: "Bek", age: 19 },
    { name: "Omar", age: 30 }
];

users.forEach(user => console.log(`${user.name}-${user.age} yosh`));

// 5-misol
const number0 = [12, 7, 5, 8, 3, 10, 6];
let toqSonlar = []
let jufSonlar = []
number0.forEach(num => {
    if (num % 2 === 0) {
        jufSonlar.push(num)
    } else {
        toqSonlar.push(num)
    }
})

console.log(`Juft sonlar [${jufSonlar}], Toq sonlar [${toqSonlar}]`);
