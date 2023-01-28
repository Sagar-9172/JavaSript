// // let nums = [0, 1, 0, 3, 12]
// // ss=[]
// // kk=[]
// // for(let i=0;i<=nums.length-1;i++){
// //     if(nums[i]==0){
// //         kk.push(nums[i])
// //     }
// //     else{
// //         ss.unshift(nums[i])
// //     }
// // }
// // let bb=ss.sort()
// // let c=ss.concat(kk)
// // console.log(c)


// // let ss = [0]
// // k=[]
// // for(let i=0;i<ss.length;i++){
// //     k.push(ss[i])

// // }
// // console.log(k)


// // Input: x = 120
// // Output: 21
// x = 120
// let a = x.toString()
// console.log(x)
// function reverse(string) {
//     let newstr = "";
//     for (let i = string.length - 1; i >= 0; i--) {
//         if (string[i] != 0) {
//             newstr = newstr + string[i];
//         }

//     }
//     return newstr
// }
// let b = reverse(a)
// console.log(b)





// x = 123
// let a = x.toString()
// console.log(x)
// function reverse(string) {
//     let newstr = "";
//     for (let i = string.length - 1; i >= 0; i--) {
//         newstr = newstr + string[i];
//     }
//     return newstr
// }
// let b = reverse(a)
// console.log(b)



// x = -120
// let a = x.toString()
// console.log(x)
// function reverse(string) {
//     let newstr = "";
//     for (let i = string.length - 1; i >= 0; i--) {
//         if (startsWith(string[i])) {
//             newstr.startsWith(string[i])
//         }else{
//             newstr = newstr + string[i];
//         }

//     }
//     return newstr
// }
// let b = reverse(a)
// console.log(b)










function reverseInt(int){
    let intRev ="";
    for(let i= 1; i<int.length; i++){
        intRev = int[i]+intRev ;
    }
    intRev ='-'+intRev;
    return intRev ;
}
console.log(reverseInt("-12"))


















