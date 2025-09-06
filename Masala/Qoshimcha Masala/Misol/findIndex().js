// findIndex()
// 1-misol
const numbers = [10, 20, 30, 40, 50]
const index = numbers.findIndex((num) => num === 30)

console.log(index)

// 2-misol
const number = [5, 12, 8, 130, 44]
const toqSonlar = number.findIndex((num) => num % 2 === 1)

console.log(toqSonlar)

// 3-misol
const users = [{ name: "Ali", age: 25 }, { name: "Bek", age: 30 }, { name: "Omar", age: 30 }]
const indexUser = users.findIndex((user) => user.age > 20)

console.log(indexUser)

// 4-misol
const user0 = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Bek" },
    { id: 3, name: "Omar" }
];
const indexUserId = user0.findIndex((user) => user.id > 4)

console.log(indexUserId);

// 5-misol
const users0 = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Bek" },
    { id: 3, name: "Omar" }
];
const indexUserName = users0.findIndex((user) => user.name === 'Bek')

console.log(indexUserName);
