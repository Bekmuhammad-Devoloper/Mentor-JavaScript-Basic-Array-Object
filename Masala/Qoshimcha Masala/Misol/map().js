// 1-misol
const sonlar = [1, 2, 3, 4, 5];
const nusxa = sonlar.map(sonlar => sonlar)

console.log(nusxa);

// 2-misol
const son = [1, 2, 3]
const sum1 = son.map(son => son + 1)

console.log(sum1);

// 3-misol
const num0 = [2, 4, 6]
const duplicate = num0.map(num0 => num0 * 2)

console.log(duplicate);

// 4-misol
const num1 = [2, 3, 4, 5];
const num11 = num1.map(num1 => num1 * num1)

console.log(num11);

// 5-misol
const ismlar = ['Ali', 'Bek', 'Ziyodulloh', 'Abdulaziz']

const boshHarfISm = ismlar.map(ismlar => ismlar[0].toUpperCase() + ismlar.slice(1).toLowerCase())

console.log(boshHarfISm);

// 6-misol
const numbers = [1, 2, 3];
const satrliSon = numbers.map(numbers => `${numbers}-son`)

console.log(satrliSon);

// 7-misol
const booleanArray = ['true', 'false', 'true', 'false']
const teskaribooleanArray = booleanArray.map(value => value === 'true' ? false : true)

console.log(teskaribooleanArray);

// 8-misol
const ballar = [60, 70, 80, 90];
const ballplus = ballar.map(ballar => ballar + 10)

console.log(ballplus);

// 9-misol
const talabalar = [
    { ism: "Ali", ball: 85 },
    { ism: "Bek", ball: 90 },
    { ism: "Sanjar", ball: 78 }
];
const ismlarT = talabalar.map(talabalar => talabalar.ism)

console.log(ismlarT);


// 10-misol
const talabalar0 = [
    { ism: "Ali", ball: 85 },
    { ism: "Bek", ball: 90 },
    { ism: "Sanjar", ball: 78 }
];
const ismlarT0 = talabalar0.map(talabalar0 => ({ ism: talabalar0.ism, ball: talabalar0.ball + 10 }))

console.log(ismlarT0);

// 11-misol
const talabalar1 = ["Ali", "Bek", "Sanjar"];
const idObject = talabalar1.map((ism, index) => ({
    id: index + 1,
    name: ism
}))

console.log(idObject);

// 12-misol
const talabalar2 = [
    { id: 1, ism: "Ali", yosh: 20, ball: 85 },
    { id: 2, ism: "Bek", yosh: 22, ball: 90 },
    { id: 3, ism: "Sanjar", yosh: 21, ball: 78 }
];
const yangiTalabalar3 = talabalar2.map(talabalar2 => ({ ism: talabalar2.ism, ball: talabalar2.ball }))

console.log(yangiTalabalar3);

// 13-misol
const talabalar3 = [
    { ism: "Ali", ball: 85 },
    { ism: "Bek", ball: 90 },
    { ism: "Sanjar", ball: 78 }
];

const alochitalaba = talabalar3.map(talabalar3 => ({ ...talabalar3, alochi: talabalar3.ball > 80 ? true : false }))
console.log(alochitalaba);
