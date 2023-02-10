//  8 pm -- DOM 
//  6:30 pm
// call() , bind() , apply()
let  info1 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    display:function(){
        // this =====> info
        console.log(this.firstName + this.lastName)
    }
}

let  info2 = {
    firstName:"amol",
    lastName:"rao",
    age:25
}

// method borrow

let a = info1.display
// let a = function(){
//     // this =====> info
//     console.log(this.firstName + this.lastName)
// }
a()
a = a.bind(info2)
a()
// let a = function(){
//     // this =====> info
//     console.log(info2.firstName + info2.lastName)
// }





// console.log(info1.firstName)
// console.log(info1.lastName)

// info1.display()
// info2.display()



// program 1

let vehicle1 = {
    color:"red",
    vehicle:"audi",
    display:function(){
        console.log(this.color)
    }
}

let vehicle2 = {
    color:"black",
    vehicle:"audi",
}

let b = vehicle1.display
// let b = function(){
//     console.log(this.color)
// }
b()
vehicle1.display()
let q = b.bind(vehicle2)
q()

let stu = {
    fn:"chinmay0",
    ln:"deshpande0"
}

let stu1 = {
    fn:"chinmay1",
    ln:"deshpande1"
}

let stu2 = {
    fn:"chinmay2",
    ln:"deshpande2"
}

let stu3 = {
    fn:"chinmay3",
    ln:"deshpande3"
}

let stu4 = {
    fn:"chinmay4",
    ln:"deshpande4"
}

let stu5 = {
    fn:"chinmay5",
    ln:"deshpande5"
}

let displayName = function(){
    console.log(this.fn+this.ln)
}

//displayName()

// bind

let a11 = displayName.bind(stu)
a11()
let a12 = displayName.bind(stu1)
a12()

// call()
displayName.call(stu3)
displayName.call(stu4)
displayName.call(stu5)
displayName.call(stu5)
displayName.apply(stu3)