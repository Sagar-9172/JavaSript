
// // Object literal 
// let sachin = {
//     firstName:"sachin",
//     lastName:"hande",
//     age:24,
//     skills:["python","java","javascript"]
// }

// let ravi = {
//     firstName:"ravi",
//     lastName:"jagdale",
//     age:34,
//     skills:["c#","python","javascript"]
// }

// // . notation and bracket notation
// // retive
// console.log(ravi.firstName)
// // add 
// ravi.city  = "pune"
// // update 
// ravi.age = 77
// // delete
// delete ravi.rollNo
// -----------------------------------------------------
// 1) function constructor
// 2) Es6 class
// 3) Object.create()
// 4) Object literal

// program 1
function Person(fn,ln,ag,rN){
    this.firstName = fn
    this.lastName = ln 
    this.age  = ag
    this.rollNo = rN
}

let poorva  = new Person("poorva","vyas",23,120)
console.log(poorva)
poorva.firstName = "purva"
console.log(poorva.age)
poorva.city = "pune"
delete poorva.rollNo


// program2 
let vehicle = function(color,type){
    this.type = type 
    this.color = color  
    this.displayColor = function(){
        console.log(this.color)
    }
}

let audi = new vehicle("red","SUV")
console.log(audi.color)
console.log(audi.type)
audi.displayColor()

// Program 3

class PersonB {
    constructor(fn, ln, age , rn){
        this.firstName = fn
        this.lastName = ln 
        this.age = age
        this.rollNo = rn
    }
}

let vishal = new PersonB("vishal","sathay",23,45)
console.log(vishal)


class vehicleB {
    constructor(cl,ty){
        this.color = cl,
        this.type = ty,
        this.displayColor= function(){
            console.log(this.color)
        }
    }
}
let BMW = new vehicleB("blue","sedane")
console.log(BMW)
BMW.displayColor()


