//split()
// 1-misol
const sentence ="Salom dunyo!"
const sp=sentence.split(" ")

console.log(sp)

// 2-misol
const word = "JavaScript"
const wordJoin=word.split("")

console.log(wordJoin)

// 3-misol
const fileName="document.pdf"
const file=fileName.split(".")

console.log(file)

// 4-misol
const text = "salom"
const textReverse=text.split("" ). reverse().join("") 

console.log(textReverse)

// 5-misol 
const words= "javascript"
const kword=words.split("").map(harf=>harf.toUpperCase()).join("")

console.log(kword)