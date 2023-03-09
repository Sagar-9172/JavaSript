


// async function 
function createUser() {
    setTimeout(function () {
        console.log("user created")
    }, 3000)
}

function getId() {
    setTimeout(function () {
        console.log("get ID")
    }, 2000)
}

function getInfo() {
    setTimeout(function () {
        console.log("getInfo")
    }, 1000)
}

createUser()
getId()
getInfo()

function createUser() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("user created")
        }, 3000)
    })
}
function getId() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("get Id")
        }, 2000)
    })
}
function getInfo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("get info")
        }, 1000)
    })
}
createUser().then(function (res) {
    console.log(res)
    return getId()
}).then(function (res) {
    console.log(res)
    return getInfo()
})
    .then(function (res) {
        console.log(res)
    })

async function getUsersInfo() {
    let res1 = await createUser()
    console.log(res1)
    let res2 = await getId()
    console.log(res2)
    let res3 = await getInfo()
    console.log(res3)
}
getUsersInfo()


// parallel execution of promise

// 3                 2               1
// call 1  =====>   call2 =====>    call3 ====>
// 3                    2             1
// call1   =======>   call2  ======> call3

// promise combinators 

// Promise.all()
// Promise.any()
// Promise.race()
// Promise.allSettled()



// // async function 
// // function createUser(){
// //     setTimeout(function(){
// //         console.log("user created")
// //     },3000)
// // }

// // function getId(){
// //     setTimeout(function(){
// //         console.log("get ID")
// //     },2000)
// // }

// // function getInfo(){
// //     setTimeout(function(){
// //         console.log("getInfo")
// //     },1000)
// // }

// // createUser()
// // getId()
// // getInfo()

// function createUser() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("user created")
//         }, 3000)
//     })
// }
// function getId() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("get Id")
//         }, 2000)
//     })
// }
// function getInfo() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("get info")
//         }, 1000)
//     })
// }
// // createUser().then(function(res){
// //     console.log(res)
// //     return getId()
// // }).then(function(res){
// //     console.log(res)
// //     return getInfo()
// // })
// // .then(function(res){
// //     console.log(res)
// // })

// async function getUsersInfo(){
//    let res1 =  await  createUser()
//    console.log(res1)
//    let res2 =  await  getId()
//    console.log(res2)
//    let res3 =  await  getInfo() 
//    console.log(res3)
// }
// getUsersInfo()


// // parallel execution of promise

// // 3                 2               1
// //call 1  =====>   call2 =====>    call3 ====>
// // 3                    2             1
// // call1   =======>   call2  ======> call3

// // promise combinators 

// //Promise.all()
// //Promise.any()
// //Promise.race()
// //Promise.allSettled()


// async function getUsers(){
//     let qq = await Promise.all([
//         createUser(),
//         getInfo(),
//         getId()
//     ])
//     console.log(qq)
// }
// getUsers()

const w = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("hello")
        }, 3000)
    })
}

// async function getUsers(){
//     console.time('timeSerial')
//     await w()
//     await w()
//     console.timeEnd('timeSerial')
// }
// getUsers()


// async function getUsers(){
//     console.time('timeSerial')
//      let c = await Promise.all([
//         w(),
//         w()
//      ])
//     console.timeEnd('timeSerial')
//     //console.log(c)
// }
// getUsers()



let p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('hello')
    }, 3000);
})

let p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Hi')
    }, 2000);
})

let p3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('bye')
    }, 1000);
})


async function getUser() {
    console.time('timeSerial')
    let a = await p1
    console.log(a)
    let a2 = await p2
    console.log(a2)
    let a3 = await p3
    console.log(a3)
    console.timeEnd('timeSerial')
}
getUser()


async function getUser() {
    console.time('timeSerial')

    await Promise.all([
        p1, p2, p3
    ])

    console.timeEnd('timeSerial')
}
getUser()



// Promise cobinators 4 methods

// Promise.all()--------------reject shotcircuit
// Promise.race()--------------whoever comes the first resolve or reject
// Promisea.allSettled()------gives output for resolve and return
// Promise.any()----- shortcuit at first resolve

async function getUser() {
    let z = await Promise.all([
        Promise.reject("hello"),
        Promise.resolve("bye"),
        Promise.resolve("hi")
    ])

    console.log(z)
}
getUser()

async function getUser2() {
    let z = await Promise.allSettled([
        Promise.reject("hello"),
        Promise.reject("bye"),
        Promise.resolve("hi")
    ])

    console.log(z)
}

getUser2()

async function getUser2() {
    let z = await Promise.race([
        new Promise(function (resolve, reject) {
            reject('Bye')
        }, 5000).then(function (res) {
            console.log(res)
        }, function (res) {
            console.log(res)
        }),

        new Promise(function (resolve, reject) {
            resolve('Hi')
        }, 6000)

    ])

    console.log(z)
}

getUser2()


