
// lexical scope 

function addition(){
    let x = 100
    let y = 50
    console.log(x+y)
    function additionB(){
        let a = 10
        let b = 20
        console.log(x+y)
        console.log(a+b)
        //console.log(s+t) :- child field is not accessible
        function additionC(){
            let s = 190
            let t = 80
            console.log(x+y+a+b+s+t)
        }
        additionC()
    }
    additionB()
}
addition()
// closures 

// program 2
// return is the last statment for a function
// function additionE(){
//     let s = 100
//     let t = 50
//     console.log(s+t)
//     return s + t
//     console.log('hello')
// }
// let t1 = additionE()
// console.log(t1)


// program 2b
// function additionG(){
//     let q1 = 100
//     let q2 = 50
//     return function(){
//         console.log(q1 + q2)
//     }
// }
// let r1 = additionG()

// // let  r1 = function(){
// //     console.log(q1 + q2)
// // }

// r1()
// actual difference between arrow function and function  expression and declaratio 

// function declaration 

function Addition(x,y){
    return  x + y
}
let q1 = Addition(12,3)
console.log(q1)

// function expression 
let AdditionB = function(x,y){
    return x + y
}
let q2  = AdditionB(12,14)
console.log(q2)


// arrow funtion
// let AdditionC = (x,y) =>{
//     console.log("hello")
//     return x + y
// }
// let q3  = AdditionC(12,14)
// console.log(q3)

let AdditionC = (x,y) =>x + y
let q3  = AdditionC(12,14)
console.log(q3)
// rest and spread operator