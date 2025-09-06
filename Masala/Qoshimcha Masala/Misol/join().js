//join()
// 1-misol 
const fruits =["olma", "banan", "shaftoli" ]
const fruit=fruits.join(" ")

console.log(fruit)

// 2-misol
const latters=["H", "e", "l", "l", "o" ]
const soz =latters.join("")

console.log(soz)

// 3-misol
const dataArray=["2025","03","13"]
const date=dataArray.join("/")

console.log(date)

// 4-misol
const sentence="Bugun havo juda chiroyli"
const spJoin=sentence.split(" ").join("-")

console.log(spJoin)

// 5-misol
const users =[{id:1,name:"Bek" }, {id:2,name:"Ali" }, {id:3,name:"Zokir" }]
const usersName=users.map(user=>user.name).join(", " )

console.log(usersName)