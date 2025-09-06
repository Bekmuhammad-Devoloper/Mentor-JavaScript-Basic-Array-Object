//Object.freeze()
//1-misol
const user = {
    id: 1,
    name: "Bekmuhammad",
    email: "bekmuhammad.devoloper@gmail.com",
    adress: { city: "Toshkent", street: "Haqiqat" }
}
Object.freeze(user)

user.name = "Bek"

user.adress.city = "Andijon"

console.log(user)

//2-misol
function deepFreeze(obj) {
    // Avval obyektni muzlatamiz
    Object.freeze(obj);

    // Hamma property’larni ko‘rib chiqamiz
    Object.keys(obj).forEach(key => {
        const value = obj[key];

        // Agar value obyekt bo‘lsa va hali muzlamagan bo‘lsa
        if (
            typeof value === "object" &&
            value !== null &&
            !Object.isFrozen(value)
        ) {
            deepFreeze(value); // Rekursiv chaqiramiz
        }
    });

    return obj;
}

// Object.seal()
//3-misol 
const profile = {
    id: 1,
    name: "Ali",
    email: "ali@gmail.com"
};

Object.seal(profile);

profile.name = "Vali"; // ishlaydi
profile.username = "vali123"; // qoshilmaydi
delete profile.email; // ochmaydi

//4-misol
const products = { id: 1, modell: "Audi", count: 4, price: 10000 }

Object.seal(products)
products.modell = "BMW"
products.year = 2024
delete products.id

console.log(products)

// Object.assign()
//5-misol 
const user = { name: "Bekmuhammad", age: 19 }
const admin = { role: "admin" }
Object.assign(user, admin)

console.log(user)

//6-misol
const user = {
    name: "Ali"
}
const defaultUser = {
    age: 18,
    role: 'user',
    isActive: true
}
const fullUser = Object.assign({}, defaultUser, user)

console.log(defaultUser);
console.log(user);

console.log(fullUser);


//Object.keys()
//7-misol
const user0 = {
    name: "Ali",
    age: 20,
    role: undefined
};
const keys = Object.keys(user);
console.log(keys);

keys.forEach((key) => {
    const value = user[key]

    if (value !== undefined && value !== null) {
        console.log(`${key} mavjud, qiymati: ${value}`);

    } else {
        console.log(`${key} yo'q yoki qiymat undefined/null`);

    }
})

//8-misol
const users = [
    { name: "Ali", age: 20 },
    { name: "Vali" },
    { age: 25, role: "admin" },
    { name: "Hasan", role: "user" }
];

users.forEach((user, index) => {
    if ("age" in user) {
        console.log(`Index ${index}: age mavjud, qiymati - ${user.age}`);

    } else {
        console.log(`Index ${index}: age yo'q`);

    }
})

//Object.values()
//9-misol
const cars = {
    model: 'Audi',
    color: 'white',
    price: 1000
}
const values = Object.values(cars)

console.log(values);

//10-misol
const ages = {
    Ali: 25,
    Zaynab: 30,
    Aziz: 22,
    Farida: 28
};

const totalAge = Object.values(ages).reduce((acc, age) => acc + age, 0)
console.log(totalAge);

//Object.enteries()
//11-misol
const userDev = {
    name: 'Bekmuhammad',
    age: 19,
    position: 'Back-end Devoloper'
}
const userDevArr = Object.entries(userDev)
console.log(userDevArr);

//12-misol
const user = {
    name: "bekmuhammad",
    age: 18,
    country: "uzbekistan"
};

const newUser = Object.fromEntries(
    Object.entries(user).map(([key, value]) => {
        if (typeof value === 'string') {
            return [key, value.toUpperCase()]
        }
        return [key, value]
    })
)

console.log(newUser);

//Object.create()
//13-misol
const TaskPrototype = {
    init(name, priority) {
        this.name = name;
        this.priority = priority;
    },
    start() {
        console.log(`Task "${this.name}" started.`);
    },
    complete() {
        console.log(`Task "${this.name}" completed.`);
    }
};

const task1 = Object.create(TaskPrototype);
task1.init("Imtixondan otish", "Past");

task1.start();
task1.complete()

const task2 = Object.create(TaskPrototype);
task2.init("Uy vazifasini bajarish", "O'rta");
task2.start();


//Object.defineProperty()
//14-misol
const user = {
    name: "Bekmuhammad"
};

Object.defineProperty(user, "age", {
    value: 18,
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(user.age);
user.age = 35;
console.log(user.age);
console.log(JSON.stringify(user));

//15-misol
const userProfile = {};

Object.defineProperties(userProfile, {
    username: {
        value: "bekmuhammad",
        writable: false,
        enumerable: true,
        configurable: false
    },
    password: {
        value: "secret123",
        writable: true,
        enumerable: false,
        configurable: true
    },
    createdAt: {
        value: new Date().toISOString(),
        writable: false,
        enumerable: true,
        configurable: false
    },
    email: {
        value: 'bek@gmail.com',
        writable: true,
        enumerable: false,
        configurable: false
    },
    isActive: {
        value: true,
        writable: false,
        enumerable: true,
        configurable: false
    }

});

console.log(userProfile);


//Object.hasOwnProperty()
//16-misol
const devoloper = {
    name: 'Bek',
    Education: 'Najot Ta`lim',
    Texnalogies: 'NodeJS,JS,TypeScript,NestJS'
}
console.log(devoloper.hasOwnProperty("name"));
console.log(devoloper.hasOwnProperty("city"));
console.log(devoloper.hasOwnProperty("Education"));

//Object.is()
//17-misol
console.log(Object.is(1, 1));
console.log(Object.is('Devoloper', 'Devoloper'));
console.log(Object.is(true, false));

//Object.fromEntries()
//18-misol
const NT_URL = [
    ['name', 'Najot Ta`lim'],
    ['URL', 'najottalim.uz']
]

const URL = Object.fromEntries(NT_URL)
console.log(URL);

//------------------------------------//
//Array methods
//push()
//19-misol
const students = [
    { name: 'Bek' },
    { name: 'Ali' }
]
students.push({name:'Ziyo'})
console.log(students);

//pop()
//20-misol
let SportCar=[
    {model:'BMW'},
    {model:'AUDI'},
    {model:'BYD'}
]
SportCar.pop()
console.log(SportCar);

//shift()
//21-misol
let SportCar0=[
    {model:'BMW'},
    {model:'AUDI'},
    {model:'BYD'}
]
SportCar0.shift()
console.log(SportCar0);

//unshift()
//22-misol
SportCar0.unshift({model:'Malibu'})
console.log(SportCar0);

//findIndex()
//23-misol
const sonlar=[1,2,3,4,5,6,7,8,9,10,11]
const findNumber=sonlar.findIndex(son=>son>6)

console.log(findNumber);

//concat()
//24-misol
const student0=[{name:'Bek'}]
const student1=[{name:'Ziyo'}]
const umumiyStudents=student0.concat(student1)

console.log(umumiyStudents);

//slice()
//25-misol
const time= new Date()
const buyurtmalar=[{
    id:1,
    name:'KFC',
    price:55000,
    restaran:'evos',
    time: time.toLocaleString()
},
{
    id:2,
    name:'KFC',
    price:55000,
    restaran:'evos',
    time: time.toLocaleString()
},
{
    id:3,
    name:'KFC',
    price:55000,
    restaran:'evos',
    time: time.toLocaleString() 
},{
    id:4,
    name:'KFC',
    price:55000,
    restaran:'evos',
    time: time.toLocaleString() 
},{
    id:5,
    name:'KFC',
    price:55000,
    restaran:'evos',
    time: time.toLocaleString() 
},{
    id:6,
    name:'KFC',
    price:55000,
    restaran:'evos',
    time: time.toLocaleString() 
},{
    id:7,
    name:'KFC',
    price:55000,
    restaran:'evos',
    time: time.toLocaleString() 
},
]
const umumiyBuyurtma=buyurtmalar.slice(2,4)

console.log(buyurtmalar);
console.log(umumiyBuyurtma);

//splice()
//26-misol
const number=[0,1,2,3,4,5,6,7,8,9,10,11,12]
const newNumber=number.splice(0,10,5,5,5)

console.log(newNumber);
console.log(number);

//includes()
//27-misol
const numbers=[0,1,2,3,4,5,6,7,8,9,10,11,12]
const check=numbers.includes(1)

console.log(check);

//reverse()
//28-misol
const number0=[0,1,2,3,4,5,6,7,8,9,10,11,12]
const teskariSon=number0.reverse()

console.log(teskariSon);

//join()
//29-misol
const soz =['Salom','Dunyo']
soz.join(', ')

console.log(soz);

//split()
//30-misol
const sozlar ="Salom, Dunyo"
const ajratilgan = sozlar.split(", ");

console.log(ajratilgan);


