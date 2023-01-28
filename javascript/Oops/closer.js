// lexical scope

// function addition(){
//     let x = 10
//     let y = 20
//     console.log(x+y)
//     function additionA(){
//         let a = 100
//         let b = 200
//         console.log(x+y)
//         console.log(a+b)

//         function additionC(){
//             let s = 500
//             let t = 800
//             console.log(x+y+a+b+s+t)
//         }
//         additionC()
//     }
//     additionA()
// }
// addition()

//............................................................
// closer
// return is the last statment for a function
function additionE(){
    let s = 100
    let t = 50
    console.log(s+t)
    return s + t
    console.log('hello')
}
let t1 = additionE()
console.log(t1)

// function additionG(){
//     let q1 = 100
//     let q2 = 50
//     return function(){
//         console.log(q1 + q2)
//     }
// }
// // let r1 = additionG()
// // console.log(r1)
// let  r1 = function(){
//     console.log(q1 + q2)
// }
// r1()