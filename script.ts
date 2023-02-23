// document.getElementById("demo").innerHTML = "Hello Javascript :)";
// document.getElementById('demo').style.display = "block";

// console.log("Hello Javascript");

// let a = 10
// console.log(a);

// a = 12
// console.log(a);

// let x = 5
// let y = 6
// let z = x + y 
// console.log(z);

// const x = 10
// let y = 12
// y += x
// console.log(y);

// let a = 12
// let b = '12'
// console.log (a===b);

// let a = 10
// let b = 12
// console.log (a < b && b < 20); 
// console.log (a < b || b < 20); 
// console.log(!(a == b));

// console.log((a == b)? 12 : 13);

// let a = 10
// let b = 'this is a string'
// let c = true
// console.log (typeof a)
// console.log (typeof b)
// console.log (typeof c)

// let hour = 14
// if (hour < 12) {
//     console.log("Good Morning!")
// }

// else if (hour < 18) {
//     console.log("Good Afternoon!")
// }

// else {
//     console.log("Good Night!")
// }

// switch (new Date().getDay()) {
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
// }

// const cars = ['BMW', 'Toyota', 'Mazda'];

// for (let car of cars) {
//     console.log(car);
// }

// const Name = "Amir"

// for (let n of Name) {
//     console.log(n);
// }

// let i = 1
// while (i <= 10) {
//     console.log(i);
// i++
// }

// let i = 1;
// do {
//     console.log(i);
//     i++;
// }
// while (i <= 10);

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function() {
//         return this.firstName +'' + this.lastName;
//     }
// }

// function Person(firstName, lastName) {
//     const person = {};
//     person.firstName = firstName;
//     person.lastName = lastName;
//     person.fullName = function() {
//         return this.firstName + '' + this.lastName;
//     }
//     return person;
// }

// const person = Person("John", "Doe")
// console.log(person);

// const person1 = Person("Michael", "Jordan")
// console.log(person1);

// let numbers = [1,2,3]
// let random = n => Math.floor(Math.random() * n)

// let randomNumber = numbers.map(() => random(100))
// console.log(randomNumber)

// let doubleNumbers = numbers.map(i => i * 2)
// console.log(doubleNumbers)

// function morning(name) {
//     return 'Good morning, ${name}'
// }

// function evening(name) {
//     return 'Good evening, ${name}'
// }

// function happyBirthday(name) {
//     return 'Happy Birthday ${name}'
// }

// function greet(name) {
//     return function(name)
// }

// console.log(greet('Kathric', morning))
// console.log(greet('Modric', morning))
// console.log(greet('Savacic', morning))

// const string = ["Matt", "Cat", "Kate", "Ben"]

// const filtered = string.filter(str => str.includes('at'))

// console.log(filtered)
// console.log(string)

// let arr = [3, 4, 5, 6]

// let modifiedArr = arr.map((element) => element * 3)

// console.log(modifiedArr)
// console.log(arr)

// let arr = ["apple", "banana", "durian"]

// let uppercasedArr = arr.map((element => element.toUpperCase()))

// console.log(uppercasedArr)
// console.log(arr)

// let arr = [3,4,5,6]

// let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// console.log(sum)

// let product = arr.reduce((accumulator, currentValue) => accumulator * currentValue)

// console.log(product)

// const animal = {
//     kind: "Monkey",
//     food: "Bananas",
//     hobby: "Jumping Trees"
// };

// const display = '
//     <div class="animal">
//         <h1>Hey, this is a ${animal.kind}</h1>
//         <p>It eats ${animal.food} and loves ${animal.hobby}</p>
//     </div>
// ';

// document.body.innerHTML = display

// function getArray() {
//     return ["Hello", "I", "am", "Amir"]
// }

// const greeting = getArray()[0]
// const pronoun = getArray()[1]
// const name = getArray()[3]
// const [greeting, pronoun, name] = getArray()

// console.log(greeting)
// console.log(pronoun)
// console.log(name)

// function sumOfThreeNumbers([a, b, c]) {
    // const a = arr[0]
    // const b = arr[1]
    // const c = arr[2]
//     return a + b + c
// }

// console.log(sumOfThreeNumbers([1,2,3]))

// const arr = ['a', 'b', 'c']

// for (let i in arr) {
//     console.log(i)
// }

// for (let i of arr) {
//      console.log(i)
// }


// for (let i of arr.entries()) {
//     console.log(i)
// }

// let arr1 = [1 ,2 ,3]
// let arr2 = [...arr1, 4, 5]
// console.log(arr2)

// const calcAvgRes = (...numbers) => {
//     return numbers.reduce((sum, num) => sum + num, 0) /
//     numbers.length
// }

// console.log(calcAvgRes(0, 100, 88, 64))

// let promise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve("Promise resolved!")
//     }, 1000)
// })

// async function asyncFunc() {
//     let result = await promise;

//     console.log(result)
// }

// asyncFunc()
// console.log('hello')

// const add = (a, b) => {
//     return a + b
// }

// const sub = (a, b) => {
//     return a - b
// }

// const simpleCallBack = (func1, func2, a, b) => {
//     let ex1 = func1(a, b)
//     let ex2 = func2(a, b)
//     console.log(ex1,',', ex2)
// }

// simpleCallBack(add, sub, 1, 5)

// const prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Promise is rejected")
//     }, 2000)
// })

// prom.catch(error => {
//     console.log(error)
// })

fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then((obj) => {
        console.log(obj)
    })
    .catch((error) => {
        console.error(error)
    })