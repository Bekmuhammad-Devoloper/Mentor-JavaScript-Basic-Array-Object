// Object.keys()

// 1-misol

let person = {
    name: 'Bekmuhammad',
    age: 19,
    location: 'Toshkent'
}
const keys = Object.keys(person)
console.log(keys);

// 2-misol

let mahsulot = {
    name: 'acer aspire 15',
    brend: 'acer',
    price: 15000000
}

const key = Object.keys(mahsulot)
console.log(key);

// 3-misol

let xodimlar = {
    id: 1,
    name: 'Bekmuhammad',
    position: 'Back end Devoloper'
}




const key0 = Object.keys(xodimlar)
console.log(key0);

// 4-misol
let mijoz = {
    id: 1,
    name: 'Davron',
    location: 'Toshkent'
}

console.log(Object.keys(mijoz));

// Object.values()
// 5-misol

let person1 = {
    name: 'Bekmuhammad',
    age: 19,
    location: 'Toshkent'
}

console.log(Object.values(person1));

// 6-misol

let mahsulot1 = {
    name: 'acer aspire 15',
    brend: 'acer',
    price: 15000000
}

console.log(Object.values(mahsulot1));

// 7-misol

let xodimlar0 = {
    id: 1,
    name: 'Bekmuhammad',
    position: 'Back end Devoloper'
}

console.log(Object.values(xodimlar0));

// 8-misol

let mijoz0 = {
    id: 1,
    name: 'Behzodbek',
    hisob: 1500000
}

console.log(Object.values(mijoz0));


//Object.entries()
// 9-misol
let users = {
    name: 'Admin',
    age: 25,
    location: 'Andijon'
}

console.log(Object.entries(users));

// 10-misol
let mahsulot0 = {
    name: 'acer aspire 15',
    brend: 'acer',
    price: 15000000
}

console.log(Object.entries(mahsulot0));

// 11-misol
let xodimlar1 = {
    id: 1,
    name: 'Ziyodulloh',
    position: 'Tester'
}

console.log(Object.entries(xodimlar1));

// 12-misol
let user = {
    name: 'Javohir',
    age: 25,
    location: 'Andijon'
}

console.log(Object.entries(user));

// Object.assign()
// 13-misol
let user1 = {
    name: 'Admin',
    age: 25,
    location: 'Andijon'
}
let user11 = Object.assign({}, user1, { email: 'ok@gmail.com', hobby: 'TV' });
console.log(user11);

// 14-misol
let mahsulot2 = {
    name: 'acer aspire 15',
    brend: 'acer',
    price: 15000000
}

let mahsulot3 = Object.assign({}, mahsulot2, { brend: 'Acer' })
console.log(mahsulot3);

// 15-misol
let xodimlar5 = {
    id: 1,
    name: 'Ziyodulloh',
    position: 'Tester'
}

let mahsulot4 = Object.assign({}, xodimlar5, { id: 2, name: 'Javohir', position: 'FullStack' })
console.log(mahsulot4);

// 16-misol
let user2 = {
    name: 'Javohir',
    password: 2525,
    email: 'javohir@gmail.com'
}

const user4 = Object.assign({}, user2, { telefon: 987654321, })

console.log(user4);

//Object.freeze()
//17-misol

let users1 = {
    name: 'Admin',
    age: 25,
    location: 'Andijon'
}
Object.freeze(users1)
users1.age = 30;  // Bu ozgarish amalga oshmaydi
console.log(users1.age); // Hali ham 25 bo'ladi

// 18-misol
let mahsulot6 = {
    name: 'acer aspire 15',
    brend: 'acer',
    price: 15000000
}
Object.freeze(mahsulot6)
mahsulot6.price = 0
console.log(mahsulot6.price);

// 19-misol
let xodimlar6 = {
    id: 1,
    name: 'Ziyodulloh',
    position: 'Tester'
}

Object.freeze(xodimlar6)
xodimlar6.position = 'Fullstack'
console.log(xodimlar6.position);

// 20-misol
let user6 = {
    name: 'Javohir',
    password: 2525,
    email: 'javohir@gmail.com'
}
Object.freeze(user6)
user6.password = 2222
console.log(user6.password);

// Object.seal()
// 21-misol
let user9 = {
    username: 'user1',
    password: '12345',
    email: 'user1@example.com'
};

Object.seal(user9);

user9.password = '67890';
user9.email = 'newemail@gmail.com';

user9.age = 25;
delete user9.username;

console.log(user9);

// 22-misol
let mahsulot6 = {
    name: 'acer aspire 15',
    brend: 'acer',
    price: 15000000
}
Object.seal(mahsulot6)
mahsulot6.price = 0
mahsulot6.location = 'Toshkent'
delete mahsulot6.price

console.log(mahsulot6);

// 23-misol
let xodim = {
    id: 6,
    name: 'Asadbek',
    cauntry: 'Uzbekiston'
}
Object.seal(xodim)
xodim.id = 2
xodim.password = 2601
delete xodim.name

console.log(xodim);

// 24-misol
let mijoz1 = {
    name: 'Khamidov',
    password: 2222,
    email: '512256321'
}
Object.seal(mijoz1)
mijoz1.password = 2225
mijoz1.age = 22
delete mijoz1.password

console.log(mijoz1);

// Object.create()
// 25-misol
const person0 = {
    greet: function () {
        console.log(`Salom, mening ismim ${this.name}`);
    }
};

const student = Object.create(person0);

student.name = "Bekmuhammad";
student.age = 18;

student.greet();
console.log(student);

//Object.defineProperty()
// 26-misol
const user9 = {};

Object.defineProperty(user9, "name", {
    value: "Bekmuhammad",
    writable: false,  // Xususiyatni ozgartirib bolmaydi
    configurable: false, // Xususiyatni ochirib bolmaydi
    enumerable: true // Iteratsiya qilish mumkin
});

console.log(user9.name);

user9.name = "Shokirjonov"; // Xatolik yoki o'zgarish bo'lmaydi (katta qat'iylikda xato beradi)
console.log(user9.name);


//Object.defineProperty()
// 27-misol
const user9 = {};

Object.defineProperty(user9, {
    name: {
        value: "Bekmuhammad",
        writable: false,
        configurable: false,
        enumerable: true
    },
    age: {
        value: 18,
        writable: true,
        enumerable: true,
        configurable: true

    },
    city: {
        value: "Andijon",
        writable: false,
        enumerable: false,
        configurable: true
    }
});

console.log(user9.name);

user9.name = "Shokirjonov";
console.log(user9.name);
console.log(user9.age);
console.log(user9.city);

// 28-misol
let users0 = {
    name: 'Bekmuhammad',
    age: 19,
    location: 'Toshkent'
}
console.log(users0.hasOwnProperty('name'));
console.log(users0.hasOwnProperty('age'));
console.log(users0.hasOwnProperty('city'));

// 29-misol
console.log(Object.is(10, 10));         // true
console.log(Object.is("hello", "hello"));// true
console.log(Object.is(true, true));     // true
console.log(Object.is(10, "10"));       // false (raqam va string farqli)
console.log(Object.is({}, {}));         // false (har bir obyekt yangi bo‘lgani uchun)
console.log(Object.is([], []));         // false (har bir massiv yangi bo‘lgani uchun)


// 30-misol
const entries = [
    ["name", "Bekmuhammad"],
    ["age", 18],
    ["city", "Andijon"]
];

const users2 = Object.fromEntries(entries);

console.log(users2);

