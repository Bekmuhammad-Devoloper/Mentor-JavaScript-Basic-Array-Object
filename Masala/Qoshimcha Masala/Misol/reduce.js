// reduce()
// 1-misol
const number = [1, 2, 3, 4, 5]
const sum = number.reduce((acc, num) => acc + num, 0)

console.log(sum);

// 2-misol
const numbers = [4, 9, 2, 15, 7]
const maxNubers = numbers.reduce((acc, num) => acc < num ? num : acc, 0)

console.log(maxNubers);

// 3-misol
const words = ["reduce", "metodi", "foydali"];
const wordplus = words.reduce((acc, num) => acc + ' ' + num, '')

console.log(wordplus);

// 4-misol
const users = [
    { id: 1, name: "Bek" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Omar" }
];

const usersObject = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
}, {});

console.log(usersObject);

// 5-misol
const items = ["apple", "banana", "apple", "orange", "banana", "apple"];

const itemCount = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});

console.log(itemCount); 
