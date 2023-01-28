
// Object literal 
// function constructor 
// Es6 class 
// Object.create()

//  //function constructor
// function Person(fn,ln,ag){
//     this.firstName = fn
//     this.lastName =  ln
//     this.ag = ag
//     this.display = function(){
//         console.log(this.firstName+ this.lastName)
//     }
// }

// let amol = new Person("amol","rao",29)
// let chinmay = new Person("chinmay","deshpande",31)
// console.log(amol)
// console.log(chinmay)
// amol.display()
// chinmay.display()


function PersonB(fn,ln,ag){
    this.firstName = fn
    this.lastName = ln
    this.age = ag 
}

let chinmay = new PersonB("chinmay","deshpande",45)
let amol = new PersonB("amol","rao",50)

// // adding method to prototype
PersonB.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}

// // adding property to prototype
PersonB.prototype.language = "hindi"

// // Every object has __proto__ === parent.prototype
console.log(amol.__proto__ === PersonB.prototype)
console.log(chinmay.__proto__ === PersonB.prototype)

console.log(amol)
console.log(chinmay)

amol.display()
chinmay.display()

console.log(amol.language)
console.log(chinmay.language)


//-----------------------------------------------------


let names = ["chinmay","sarika","poorva"]
let city = ["pune","nagpur"]
console.log(names.__proto__ === Array.prototype)
names.push('ram')
console.log(names)

Array.prototype.hello = function(){
    console.log("hello")
}
Array.prototype.language = "machine"

names.hello()
console.log(names.language)