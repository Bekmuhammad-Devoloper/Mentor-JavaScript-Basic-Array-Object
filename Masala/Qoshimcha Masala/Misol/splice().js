// splice()
// 1-misol 
const arr=[10, 20,30,40,50]
const newArr=arr.slice(1,4)

console.log(newArr)

// 2-misol 
const numbers=[1, 2,3,4,5]
const finish=numbers.slice(-3)

console.log(finish)

// 3-misol
const text="JavaScript"
const part=text.slice(4,10)

console.log(part)

// 4-misol 
const arr01=[1, 2,3,4]
const copyArr=arr01.slice()

console.log(arr01) 
console.log(copyArr)

// 5-misol
// slice oldingi arrayni ozgartirmaydi
const arr1 = [10,20,30,40,50 ]
const newArr01=arr1.slice(1,4)

console.log(newArr01)
console.log("Oldingi arr :",arr1 )

//splice oldingi arr ozgaradi
const newArr02=arr1.splice(1,4) 



console.log(newArr02) 
console.log("Oldingi arr : ", arr1 )