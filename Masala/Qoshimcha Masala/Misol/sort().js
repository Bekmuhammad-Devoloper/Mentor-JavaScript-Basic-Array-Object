// sort()
// 1-misol
const sonlar =[4, 1,7,3,9]
const osuvciSon=sonlar.sort((a, b)=>a-b )

console.log(osuvciSon)

// 2-misol 
const number =[4, 9,2,15,7]
const maxNumber=number.sort((a,b)=>b-a)

console.log(maxNumber[0])

// 3-misol
const words=["reduce", "metodi", "foydali" ]
words.sort()
const soz=words.join(" " )

console.log(soz)

// 4-misol 
const users =[{name:"Ali", age:25} ,{name:"Bek ", age:19}, {name:"Omar", age:30}]
const userTable=users.sort((a,b)=>a.age-b.age)

console.log(userTable)

// 5-misol
const word = ["qalam", "kitob", "dastur", "A", "JavaScript"];
word.sort((a,b)=>a.length-b.length)

console.log(word);

