// class name1{
//     firstName = undefined
//     lastName =  undefined
//     age = undefined
//     gender=undefined
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// // setting the class fields / property outside the class
// let sagar = new name1()
// console.log(sagar)
// sagar.firstName = "sagar"
// sagar.lastName =  "nanavare"
// sagar.age = 25
// sagar.gender="male"
// console.log(sagar)
// sagar.displayName()


// setting the instance fields at the time of object creation
class name2 {
    constructor(fi,la,ag,ge){
        this.firstName = fi
        this.lastName = la
        this.age = ag
        this.gender=ge
    }
    displayName(){
        console.log(this.fi + this.la)
    }
}
let ss = new name2("sagar","nanavare",34,"male")
console.log(ss)
ss.displayName()


// Using get and set method 
class name3 {
    setFirstName(fi){
        this.firstName = fi
    }
    setLastName(ln){
        this.lastName = ln
    }
    setAge(ag){
        this.ag = ag
    }
    setgender(ge){
        this.gender = ge
    }
    getFirstName(){
        return this.firstName
    }
    getLastName(){
        return this.LastName
    }
    getAge(){
        return this.Age
    }
    getgender(ge){
        return this.gender
    }
}
let ramesh = new name3()
console.log(ramesh)
ramesh.setFirstName("ramesh")
ramesh.setLastName("shinde")
ramesh.setAge(23)
ramesh.setgender("male")
console.log(ramesh)
console.log(ramesh.getLastName())
