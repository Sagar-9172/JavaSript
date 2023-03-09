

//lexical scope and closure

//let age=34
// let human = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 25,
//     display: function () {
//         console.log(age)
//     }
// }
// console.log(human.age) //25
// human.display()//error

// let human = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 25,
//     display: function () {
//         console.log(this.age)
//     }
// }
// console.log(human.age) //25
// human.display()//25


//==============================================================

//lexical scope
//function inside function ==> parent function variable are acessible in child function

// function add() {
//     let a = 10
//     let b = 20
//     console.log(a + b) //30

//     function add1() {
//         let c = 100
//         let d = 20
//         console.log(c + d) //120
//         console.log(a + b) //30
//         console.log(a + b + c + d) //150

//         function add2() {
//             let e = 60
//             let f = 2
//             console.log(e + f) //62
//             console.log(a + b + c + d) //150
//             console.log(a + b + c + d + e + f) //212
//         }

//         add2()
//     }
//     add1()
// }
// add() 


//==================================================================

// function init() {
//     let p = 2
//     let q = 3
//     console.log(p + q)
//     console.log(r + s) //not accessible

//     function initOne() {
//         let r = 10
//         let s = 12
//         console.logg(p + q) //5
//     }
//     initOne()
// }
// init()

//=========================================================================

//globle scope
// let e = 10
// let f = 20

// function display() {
//     let a = 5
//     let b = 2
//     console.log(a + b) //7
//     console.log(e + f) //30

//     function displayOne() {
//         let c = 30
//         let d = 20
//         let e = 100
//         let f = 50
//         console.log(c + d) //50
//         console.log(e + f + c + d) //200

//         function displayTwo() {
//             let e = 400
//             let f = 500
//             console.log(e + f) //900
//         }
//         displayTwo()
//     }
//     displayOne()
// }
// display()


//==========================================================================

// let e = 10
// let f = 20

// function display() {
//     let a = 5
//     let b = 2
//     console.log(a + b) //7
//     console.log(e + f)  //30

//     function displayOne() {
//         let c = 30
//         let d = 20
//         console.log(c + d) //50
//         console.log(e + f + c + d) //80

//         function displayTwo() {
//             console.log(e + f)   //30
//         }
//         displayTwo()
//     }
//     displayOne()
// }
// display()
//================================================================================


//closure

// function add() {
//     let a = 10
//     let b = 20
//     return a + b
//     console.log(a+b+10)
//     console.log('hello')
// }
// let result = add()
// console.log(result)


function add() {
    let a = 10
    let b = 20
    return function () {
        console.log(a + b)
        console.log(a + b + 10)
        console.log('hello')
    }
}

let aa = add()
console.log(aa) //function
aa()
console.log("sagar")