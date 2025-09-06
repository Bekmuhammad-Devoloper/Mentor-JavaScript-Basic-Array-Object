// map()
// 1-misol
const fruits = ["apple", "banana", "cherry"]
const res = fruits.map(harf => harf.toUpperCase())

console.log(res)

// 2-misol 
const students = [{ id: 1, name: "Bek", ball: 100 }, { id: 2, name: "Ali ", ball: 65 }]
const ballplus = students.map(user => ({
  ...user,
  ball: user.ball + 5
}))

console.log(ballplus)

//filter()
// 3-misol
const numbers = [1, 2, 3, 4, 5, 6]
const num = numbers.filter(num => num % 2 == 0)

console.log(num)

// 4-misol 
const empolye = [{ name: "Ali", position: "menager" }, { name: "Bek", position: "developer" }, { name: "Zarina", position: "developer" }, { name: "Dilshod", position: "designer" }]
const empolyeDev = empolye.filter(dev => dev.position === "developer")

console.log(empolyeDev)

//reduce()
// 5-misol
const numbers00 = [1, 2, 3, 4, 5]
const numPlus = numbers00.reduce((acc, num) => acc + num, 0)

console.log(numPlus)

// 6-misol
const salaries = [{ name: "Ali", salary: 1200 }, { name: "Bek", salary: 1500 }, { name: "Dilshod", salary: 1000 }]
const sumSalaries = salaries.reduce((acc, num) => acc + num, 0)

console.log(sumSalaries)

//find()
// 7-misol
const numbers0 = [1, 2, 3, 4, 5]
const search = numbers0.find(num => num === 3)

console.log(search)

// 8-misol
const students0 = [{ name: "Ali", score: 56 }, { name: "Bek", score: 78 }, { name: "Dilshod", score: 82 }]
const stScore = students0.find(user => user.score > 60)

console.log(stScore)

//sort()
//9-misol
const num01 = [4, 2, 5, 1, 3]
const res0 = num01.sort((a, b) => a - b)

console.log(res0);

//10-misol
const students001 = [{ name: 'Ali', score: 56 }, { name: 'Bek', score: 78 }, { name: 'Dilshod', score: 82 }];
const resStudent = students001.sort((a, b) => b.score - a.score)

console.log(resStudent);

//forEach()
//11-misol
const numbers01 = [1, 2, 3];

numbers.forEach(number => {
  console.log(number);
});

//12-misol
const students002 = [
  { name: 'Ali', score: 56 },
  { name: 'Bek', score: 78 },
  { name: 'Dilshod', score: 82 }
];

students.forEach(student => {
  console.log(`${student.name} - ${student.score}`);
});

//push()
//13-misol
const students000 = [{ name: "Ali", score: 75 }, { name: "Bek ", score: 85 }]
const newStudent = { name: "Zarina", score: 90 }
const umumiyST = students000.push(newStudent)

console.log(students000)

//14-misol
const trashlist = [{ type: "plastic", kg: 5 }, { type: "Glass", kg: 3 }]
const newTrash = { type: "metall", kg: 5 }
trashlist.push(newTrash)

console.log(trashlist)

//pop()
//15-misol
const tasks = ["Task 1", "Task 2", "Task 3"]
tasks.pop()

console.log(tasks)

//16-misol 
const customers = ["Ali", "Bek", "Zarina"]
customers.pop()

console.log(customers)

//unshift()
//17-misol
const fruits01 = ["olma", "banan", "shaftoli"]
const arc = fruits01.unshift("behi")

console.log(fruits01)
console.log(arc)

//18-misol 
const students071 = [{ name: "Islombek", age: 28 }, { name: "Ali", age: 18 }]
students071.unshift({ name: "Bekmuhammad ", age: 19 })

console.log(students071)

//shift()
//19-misol
const queue = ["User1", "User2", "User3"]
queue.shift()

console.log(queue)

//20-misol
const cars = ["Ferari", "Onix", "BYD"]
cars.shift()

console.log(cars)

//findIndex()
//21-misol
const workers = [{ name: 'Ali', role: 'manager' },
{ name: 'Bek', role: 'developer' },
{ name: 'Zarina', role: 'designer' }];
const workersDev = workers.findIndex(dev => dev.role === 'developer')

console.log(workersDev);

//22-misol
const scores = [35, 48, 78, 42];
const score50 = scores.findIndex(scores => scores > 50)

console.log(score50);

//concat()
//23-misol
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr12 = arr1.concat(arr2)

console.log(arr12);

//24-misol
const students1 = ['Ali', 'Bek'];
const students2 = ['Zarina', 'Dilshod'];
const st1st2 = students1.concat(students2)

console.log(st1st2);

//slice()
//25-misol
const arr = [1, 2, 3, 4, 5];
const arrSlice = arr.slice(2, 4)

console.log(arrSlice);
console.log(arr);

//26-misol
// Asl massiv
let originalArray = [1, 2, 3, 4, 5];

// Massivni nusxalash slice() yordamida
let copiedArray = originalArray.slice();

// O'zgaruvchan massiv yaratish
copiedArray.push(6);

console.log("Asl massiv:", originalArray);
console.log("O'zgartirilgan massiv:", copiedArray);


//splice()
//27-misol
const array = [1, 2, 3, 4, 5];
array.splice(2, 0, 2, 3);
let removedElement = array.splice(1, 1);

console.log("Yangilangan massiv:", array);
console.log("Olib tashlangan element:", removedElement);

//28-misol
const arr0 = [1, 2, 3, 4, 5];
let arrDel = arr0.splice(1, 1)

console.log(arr0);
console.log(arrDel);

//incloudes()
//29-misol
const products = ['non', 'shakar', 'guruch', 'makaron'];
const userInput = 'shakar';
const check = products.includes(userInput)

console.log(check);

//30-misol
const password = prompt('Iltimos parolingizni kiriting!')
const specialChars = ['@', '#', '$', '%'];
let isValid = specialChars.some(char => password.includes(char));


if (isValid) {
  console.log("Parol qabul qilindi.");
} else {
  console.log("Parolda kamida bitta maxsus belgi (@, #, $, %) bo'lishi kerak.");
}


if (isValid) {
  alert("Parol qabul qilindi.");
} else {
  alert("Parolda kamida bitta maxsus belgi (@, #, $, %) bo'lishi kerak.");
}

//reverse()
//31-misol
const arr01 = prompt("Massivni kiriting, elementlarni vergul bilan ajratib yozing").split(',');
const reversedSquared = arr01.reverse().map(num => Math.pow(Number(num), 2));

console.log(reversedSquared);

//32-misol
const text = prompt("Matnni kiriting");
const vowels = "aeiouAEIOU";
const reversedText = text.split('')
  .reverse()
  .filter(char => vowels.includes(char))
  .join('');
console.log(reversedText);
