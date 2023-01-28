// Object literal

let friuts = {
    name: "apple",
    test: "sweet",
    colour: "red",

    sagar: function () {
        console.log(this.name + this.test)
    }
}
console.log(friuts)


// function contructor
function sagar(nm, sr, ge) {

    this.name = nm
    this.sirname = sr
    this.gender = ge

    this.ss = function () {
        console.log(this.name + this.gender)
    }
}

let ssn = new sagar("sagar", "nanavare", "male")
console.log(ssn)

// Es6 class

class book {
    constructor(first, second, third) {
        this.chap1 = first
        this.chap2 = second
        this.chap3 = third

        // this.ssn = function () {
        //     console.log(this.chap1 + this.chap2)
        // }
    }
    
        // this.ssn = function () {
        //     console.log(this.chap1 + this.chap2)
        // }
}

let subject = new book("polity", "economics", "history")
console.log(subject)
// subject.ssn()

console.log(subject.__proto__ === book.prototype)

book.prototype.ssn = function () {
    console.log(this.chap1 + this.chap2)
}
book.prototype.new = "maths"
subject.ssn()
console.log(subject.new)
console.log(subject.hasOwnProperty("maths"))

// Object.create()

let obj = {
    init: function (fn, ln, ag, ge) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.gender = ge
    },
    xyz() {
        console.log(this.firstName + this.gender)
    }
}

let rajiv = Object.create(obj)
rajiv.init("rajiv", "jadhav", 23, 34)
console.log(rajiv)
rajiv.xyz()
console.log(rajiv)



function person(fn,la){
    this.firstname=fn
    this.lastname=la

}

let sagar= new person("sagar","nanavare")




