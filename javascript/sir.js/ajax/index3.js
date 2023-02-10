
// // Sync vs Asyn

// // A ------> B --------> C --------> D

// // A
// // B
// // C
// // D

// // sync
// function AdditionA() {
//     console.log('A')
// }
// function AdditionB() {
//     console.log('B')
// }
// // AdditionB()
// // AdditionA()

// // async 
// // function AdditionC() {
// //     setTimeout(function () {
// //         console.log('C')
// //     }, 2000)
// // }

// // function AdditionD() {
// //     console.log('D')
// // }
// // AdditionC()
// // AdditionD()

// // Aysync ------- execution ------ sync
// //usercreate ----- userid ---------info

// function getInfo() {
//     setTimeout(function () {
//         console.log('user create')
//     }, 3000)

//     setTimeout(function () {
//         console.log('user id')
//     }, 2000)

//     setTimeout(function () {
//         console.log('user info')
//     }, 1000)

// }
// //getInfo()
// // async ===== execution sync 


// // call back hell

// function getInfo() {
//     setTimeout(function () {
//         console.log('user create')
//         setTimeout(function () {
//             console.log('user id')
//             setTimeout(function () {
//                 console.log('user info')
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getInfo()

// // Promise ----- asyn code ---- sync execution 
// // Promise  ---  async code in parallel
// // Eliminate call back 

// // pending , resolve , reject

// // let pro = new Promise(function(resolve,reject){
// //     let a = 100
// //     let b = 500
// //     if(a > b){
// //         resolve("a is greater")
// //     }
// //     else {
// //         reject("b is greater")
// //     }
// // })

// // pro.then(function(str){
// //     console.log(str)
// // },function(str){
// //     console.log(str)
// // })

// // let pro = new Promise(function(resolve,reject){
// //     let a = 1000
// //     let b = 500
// //     if(a > b){
// //         resolve("a is greater")
// //     }
// //     else {
// //         reject("b is greater")
// //     }
// // })

// // pro.then(function(str){
// //     console.log(str)
// // })
// // .catch(function(str){
// //     console.log(str)
// // })



// // let pro = new Promise(function(resolve,reject){
// //     let a = 1000
// //     let b = 5000
// //     if(a > b){
// //         resolve("a is greater")
// //     }
// //     else {
// //         reject("b is greater")
// //     }
// // })

// // pro.then(function(str){
// //     console.log(str)
// // })
// // .catch(function(str){
// //     console.log(str)
// // })
// // .finally(function(){
// //     console.log('I  will execute at any cost')
// // })




// let pro2 = new Promise(function(resolve,reject){
//     let a = 5
//     let b = 2
//     if(a > b){
//         resolve("a is greater")
//     }
//     else {
//         reject("b is greater")
//     }
// })

// // pro2
// // .then(function(str){
// //     console.log(str)
// //     return [1,2,3]
// // })
// .then(function(a){
//     console.log(a)
//     console.log(a[0])
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log('I  will execute at any cost')
// })


function createUser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('user created')
        },3000)
    })
}

function getId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('Id retrive')
        },2000)
    })
}

function getInfo(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('got info ')
        },1000)
    })
}

createUser()
.then(function(res){
    console.log(res)
    return  getId()
})
.then(function(res){
    console.log(res)
    return getInfo()
})
.then(function(res){
    console.log(res)
})