

// Object literal 
// Function constructor
// Es6 class 
// Object.create()

// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:23,
//     skills:["javascript","python","html","css"]
// }
// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:25,
//     skills:["javascript","python3","html5","css"]
// }
// console.log(amol)

// let names = ["chinmay","sarika","poorva"]
// console.log(names)
// names.push("amol")
// names.length

// function constructor

function Person(firstName,lastName,age,rollNo){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.rollNo = rollNo
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}




let ram = new Person("ram","dani",133,4)
let ram2 = new Person("ram2","dani2",132,45)
// console.log(ram)
// ram.display()
// console.log(ram2)
// ram2.display()
// retrive , update , add ,delete
console.log(ram)
console.log(ram2)
console.log(ram.__proto__ === Person.prototype)
Person.prototype.displayName = function(){
    console.log(this.firstName  + this.lastName)
}
Person.prototype.country = "India"
ram.displayName()
ram2.displayName()

console.log(ram.country)
console.log(ram2.country)

console.log(ram.hasOwnProperty('country'))
console.log(ram2.hasOwnProperty('age'))

// Program 2


class PersonB {
    constructor(firstName,lastName,age,rollNo){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age 
        this.rollNo = rollNo
        // this.displayName = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }


}

let rakesh = new PersonB('rakesh','sharma',23,56)
let ramesh = new PersonB('ramesh','sharma',25,53)
console.log(rakesh)
console.log(ramesh)

// rakesh.displayName()
// ramesh.displayName()


ramesh.displayName()
rakesh.displayName()

// Object.create()

let obj = {
    init:function(fn,ln,ag,rollNo){
        this.firstName = fn
        this.lastName = ln 
        this.age = ag 
        this.rollNo = rollNo
    },
    displayName(){
        console.log(this.firstName + this.lastName)
    },
    country:"India"
}

let sameer = Object.create(obj)
sameer.init("sameer","irani",23,34)
console.log(sameer)
sameer.displayName()
console.log(sameer.country)
console.log(sameer)