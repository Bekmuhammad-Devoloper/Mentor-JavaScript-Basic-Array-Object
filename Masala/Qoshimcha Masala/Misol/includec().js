//includec()
//1-misol
const fruits = ["olma", "banan", "shaftoli" ]

console.log(fruits.includes("olma"))
console.log(fruits.includes("apelsin"))

// 2-misol
const numbers=[10, 20,30,40,50 ]
console.log(numbers. Inludes(30) )
console.log(numbers. Inludes(100) )

// 3-misol
const text ="Bugun havo juda chiroyli"
console.log(text.includes("havo"))
console.log(text.includes("JavaScript" ))

// 4-misol
const colors = ["qizil", "yashil", "ko‘k"];

console.log(colors.includes("yashil")); // true
console.log(colors.indexOf("yashil") !== -1); // true

console.log(colors.includes("oq")); // false
console.log(colors.indexOf("oq") !== -1); // false

// 5-misol
const users = [
    { name: "Bek", age: 18 },
    { name: "Ali", age: 22 },
    { name: "Zokir", age: 25 }
  ];
  
  console.log(users.includes({ name: "Bek", age: 18 })); // false ❌
  
  console.log(users.some(user => user.name === "Bek")); // true ✅
  console.log(users.some(user => user.age === 30)); // false