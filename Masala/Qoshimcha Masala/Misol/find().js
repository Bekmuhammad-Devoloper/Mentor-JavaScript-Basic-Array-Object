// find()
// 1-misol
const numbers = [1, 3, 5, 8, 10];
const juftson = numbers.find(numbers => numbers % 2 === 0)

console.log(juftson);

// 2-misol 
const names = ["Ali", "Bek", "Omar", "Sardor", "Shoxrux"];
const length0 = names.find(names => names.length)

console.log(length0);

// 3-misol
const number = [-5, -3, -1, 0, 4, 7, 10];
const musbat = number.find(number => number > 0)

console.log(musbat);

// 4-misol
const users = [
    { name: "Ali", age: 15 },
    { name: "Bek", age: 17 },
    { name: "Omar", age: 20 },
    { name: "Sardor", age: 22 }
];
const userAge = users.find(users => users.age > 18)

console.log(userAge);

// 5-misol
const products = [
    { name: "Telefon", price: 500, discount: 0 },
    { name: "Noutbuk", price: 1200, discount: 10 },
    { name: "Planshet", price: 700, discount: 5 },
    { name: "Sichqoncha", price: 50, discount: 0 }
];

const arc = products.find(products => products.discount > 0)

