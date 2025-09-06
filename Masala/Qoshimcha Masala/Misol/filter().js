// filter()
// 1-misol
const sonlar=[1, 2,3,4,5,6]
const toqSonlar=sonlar.filter(sonlar=>sonlar%2!==0)

console.log(toqSonlar )

// 2-misol 
const sonlar0 =[-5,3,-2,8,0,-1]
const musbatSonlar=sonlar0.filter(sonlar=>sonlar>0)

console.log(musbatSonlar)

// 3-misol
const talabalar=[{ism:"Ali", ball:85},{ism:"Bek", ball:70},{ism:"Sanjar ", ball:90}]
const yuqoriBall = talabalar.filter(talabalar=>talabalar.ball>80)

console.log(yuqoriBall)

// 4-misol
const sozlar=["salom", "olma","kitob ", "a", "maktab "] 
const uzunSozlar=sozlar.filter(sozlar=>sozlar.length>4)


console.log(uzunSozlar)

// 5-misol
const qiymatlar=[true, false, true, false, true] 
const rostQiymatlar=qiymatlar.filter(qiymatlar=>qiymatlar===true)


console.log(rostQiymatlar)

// 6-misol
const odamlar=[{ism:"Ali", yosh:18},{ism:"Bek", yosh:25},{ism:"Sanjar", yosh:22}] 
const chegara=odamlar.filter(odamlar =>odamlar.yosh>20)
console.log(chegara)

// 7-misol 
const elementlar=[0, "salom", "", false, "dunyo ", null, 42]
const trueQiymatlar =elementlar.filter(Boolean)
console.log(trueQiymatlar )