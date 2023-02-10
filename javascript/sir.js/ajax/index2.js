
// // sync 

// // asyn

// //  A   ------->  B --------> C  -------- D(sync)

// // (async)
// //A
// //B
// //C
// //D


// // program 1
// function additionA() {
//     console.log('A')
// }
// function additionB() {
//     console.log('B')
// }
// additionB()
// additionA()

// // program2

// function additionC() {
//     setTimeout(function () {
//         console.log('C')
//     }, 2000)
// }
// function additionD() {
//     console.log('D')
// }

// // additionC()
// // additionD()

// // program 3
// // usercreate  ------ username ------ info


// function userCreated() {
//     setTimeout(function () {
//         console.log('user created')
//     }, 3000)

//     setTimeout(function () {
//         console.log('username found')
//     }, 2000)

//     setTimeout(function () {
//         console.log('user info')
//     }, 1000)
// }
// //userCreated()


// // call back hell
// function userCreated() {
//     setTimeout(function () {
//         console.log('user created')
//         setTimeout(function () {
//             console.log('username found')
//             setTimeout(function () {
//                 console.log('user info')
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// //userCreated()

// // Promise -----
// // pending  ---------- relsolve -------- reject 
// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 20
//     if (a == b) {
//        // console.log(a)
//        resolve('a and b are equal')
//     }
//     else {
//        // console.log(b)
//        reject('a and b are not equal')
//     }
// })

// pro.then(function(s){
//     console.log(s)
// },function(s){
//     console.log(s)
// })

// // let pro = new Promise(function (resolve, reject) {
// //     let a = 10
// //     let b = 10
// //     if (a == b) {
// //        // console.log(a)
// //        resolve('a and b are equal')
// //     }
// //     else {
// //        // console.log(b)
// //        reject('a and b are not equal')
// //     }
// // })

// // pro
// // .then(function(s){
// //     console.log(s)
// // })
// // .catch(function(s){
// //     console.log(s)
// // })

// // let pro2 = new Promise(function (resolve, reject) {
// //     let a = 10
// //     let b = 100
// //     if (a == b) {
// //        // console.log(a)
// //        resolve('a and b are equal')
// //     }
// //     else {
// //        // console.log(b)
// //        reject('a and b are not equal')
// //     }
// // })

// // pro2
// // .then(function(s){
// //     console.log(s)
// // })
// // .catch(function(s){
// //     console.log(s)
// // })
// // .finally(function(){
// //     console.log('I will run any case')
// // })



let pro2 = new Promise(function (resolve, reject) {
    let a = 10
    let b = 100
    if (a == b) {
       // console.log(a)
       resolve('a and b are equal')
    }
    else {
       // console.log(b)
       reject('a and b are not equal')
    }
})

// pro2
.then(function(s){
    console.log(s)
    return [11,22,33]
})
.then(function(a){
    console.log(a) // hello
    console.log(a[0])
})
.catch(function(s){
    console.log(s)
})
.finally(function(){
    console.log('I will run any case')
})