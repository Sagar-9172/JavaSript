// function main 3 type

//............................. 1.function declaration......................//

//                        A.function without para and without return                  //
// function dd(){
//     console.log(50+50)
// }
// dd()//100

//                         B.function with para and without return                    //

function ss(a,b){
    console.log(a+b)
}
ss(30,30)//60
ss(70,70)//140

//                         c.function with para and with return                        //

// function gg(aa,bb){
//     return (aa+bb)
// } 

// let sagar = gg(35,35)
// console.log(sagar)
// let soma = gg(90,90)
// console.log(soma)


// ................................2.function expresssion................................//

//                             A.function without para and without return                          //

// let ggg = function(){
// console.log(60+60)
// }
// ggg()

// //                                   B.function with para and without retur                       //
// let ww = function(x,y){
//     console.log(x*y)
//     }
//     ww(20,20)
//     ww(10,10)

//                                    c.function with para and with return                //

// let kk = function(x,y){
// return (x/y)
//     }
//     let a =kk(20,10)
// console.log(a)


// //........................................3.Arrow function....................................//

//                                A.function without para and without reutrn           //
// let qq =()=>{
//     console.log(45+45)
// }
// qq()

// //                              B.function with para and without reutrn               //
// let nn =(x,y)=>{
//     console.log(x*y)
// }
// nn(12,12)
// nn(14,14)

// //                               c.function with para and with reutrn                  //
let mm =(x,y)=>{
    return (x*y)
}
let b = mm(50,50)
console.log(b)