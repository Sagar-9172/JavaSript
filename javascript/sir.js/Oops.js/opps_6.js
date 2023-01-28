
class PersonA {
    firstName = undefined
    lastName =  undefined
    age = undefined

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
// setting the class fields / property outside the class
let amol = new PersonA()
console.log(amol)
amol.firstName = "amol"
amol.lastName =  "rao"
amol.age = 34
console.log(amol)
amol.displayName()

// setting the instance fields at the time of object creation
class PersonB {
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let poorva = new PersonB("poorva","vyas",34)
let ajay = new PersonB("ajay","rao",35)
console.log(poorva)
console.log(ajay)
poorva.displayName()
ajay.displayName()

// Using get and set method 


class PersonC {

    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    setAge(ag){
        this.ag = ag
    }

    getFirstName(){
        return this.firstName
    }
    getLastName(){
        return this.lastName
    }
    getAge(){
        return this.age
    }
}

let sarika = new PersonC()
console.log(sarika)
sarika.setFirstName("sarika")
sarika.setLastName("pansare")
sarika.setAge(23)
console.log(sarika)
console.log(sarika.lastName)

console.log(sarika.getLastName())

////////////////

class PersonD {
    set fName(fn){
        this.firstName = fn
    }

    set lName(ln){
        this.lastName = ln
    }

    set ae(ag){
        this.age = ag
    }

}

let karthik = new PersonD()
karthik.fName = "karthik s"
karthik.lName = "rao"
karthik.ae = 78
console.log(karthik)