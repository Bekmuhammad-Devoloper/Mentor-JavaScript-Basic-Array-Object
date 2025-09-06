//concat()
// 1-misol
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = arr1.concat(arr2)

console.log(result);

// 2-misol
const numbers = [10, 20];
const letters = ['a', 'b', 'c'];
const symbols = ['!', '@'];
const res=numbers.concat(letters,symbols)

console.log(res);

// 3-misol
const names =['Bek','Ali']
const newNames=names.concat('Vali')

console.log(newNames);

// 4-misol
const arr01=[1, 2]
const arr02=[[3,4]]
const res1=arr01.concat(arr02.flat())

console.log(res1)

// 5-misol
const obj1=[{name:'Bek' }]
const obj2=[{name:'Ali' }]
const newObj=obj1.concat(obj2)
console.log(newObj)

