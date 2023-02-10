//                  program 1

// function letterA(){
//     console.log("A")
// }
// function letterB(){
//     console.log("B")
// }
// letterA()
// letterB()

//                   program2



// function letterC(){
//     setTimeout(function(){
//         console.log("C")
//     },2000)

// }
// function letterD(){
//     console.log("D")
// }
// letterC()
// letterD()


//                    program3


// function userinfo(){
//     setTimeout(function(){
//         console.log("sign up complete")
//     },3000)
//     setTimeout(function(){
//         console.log("username created")
//     },2000)

//     setTimeout(function(){
//         console.log("login done")
//     },1000)

// }
// userinfo()


//               combined program 3           
// async ----- excution --- sync --- testing
// call back hell

// function userinfo() {
//     setTimeout(function () {
//         console.log("sign up complete"),
//             setTimeout(function () {
//                 console.log("username created"),
//                     setTimeout(function () {
//                         console.log("login done")
//                     }, 3000)
//             }, 2000)
//     }, 1000)

// }
// userinfo()

// // ES6 async code --- execution -- sync  =====> Promise
let prom = new Promise(function(resolve,reject){
    let a = 10
    let b = 200
    if(a==b){
        resolve("a and b are equal")

    }else{
        reject("a and b are not equal")
    }
})
prom.then(function(str){
    
    console.log(str)
})
.catch(function(str){
    
    console.log(str)
})