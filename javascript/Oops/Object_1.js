// 1) Object literal
// 2) function constructor
// 3) Es6 class
// 4) Object.create()

// object literal
let sagar = {
    firstname: "sagar",
    lastname: "nanavare",
    age: 25,
    skill: ["javascript", "cypress"],
    eduction: "BE"
}

let ramesh = {
    firstname: "ramesh",
    lastname: "jadhav",
    age: 26,
    skill: ["pythan", "javascript", "cypress"],
    eduction: "BE"
}

// retrive the value
console.log(sagar.lastname)

// Add the value
sagar.gender = "Male"
console.log(sagar)

// update the value
sagar.eduction = "engg"
console.log(sagar)

// delete the value
delete sagar.age
console.log(sagar)

//  function constructor
// Program 1
function Sagar(fn, ln, ag, ge) {
    this.firstname = fn
    this.lastname = ln
    this.age = ag
    this.gender = ge
}
// let ss = new Sagar("Sagar", "Nanavare", 25, "Male")
// console.log(ss)
let dd = new Sagar("mahesh", "jadhav", 26, "Male")
console.log(dd)
console.log(dd.gender)

// program 2
let subject = function (newsub, oldsub) {
    this.newsubject = newsub
    this.oldsubject = oldsub
}
let books=new subject("economics","polity")
console.log(books)
console.log(books.oldsubject)


// program 3
class Person {
    constructor(fn, ln, age , ge){
        this.firstName = fn
        this.lastName = ln 
        this.age = age
        this.Gender = ge
    }
}
let Data = new Person("sachin","varpe",25,"Male")
console.log(Data)


// Object create 

// program1
let ranjit = Object.create({})
console.log(ranjit)

ranjit.firstName = "ranjit"
ranjit.lastName = "hake"
ranjit.age = 22
ranjit.skills = ["python","css","html", "javascript"]
ranjit.display = function(){
    console.log(this.firstName + this.lastName)
}

console.log(ranjit)

let obj = {
    init:function(fn,ln,ag,rn,sk){
        this.firstName = fn,
        this.lastName = ln
        this.rn = rn,
        this.age = ag,
        this.skills = sk
    },
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

let rahul = Object.create(obj)
rahul.init("rahul","shinde",34,54,["css","html","js"])
console.log(rahul)
rahul.display()






