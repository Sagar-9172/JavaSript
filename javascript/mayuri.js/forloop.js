
//switch case =>

//loop
//for loop
//while loop
//do while

//function => DRY

//loop => repetative operation perform based on condition

//1 - 100000 => print

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

//1. for loop
//syntax

// for(initialization;conditioncheck;increment/decrement){
//     //statements
// }


//let firstName="Mayuri"
//1-5 print

//forward loop

// for (let i = 1; i <= 5; i++) { //2  3  4 5 6
//     console.log(i)   //1 1<=5   2 2<=5  3 3<=5  4 4<=5 5 5<=5 6 6<=5
// }
//1
//2
//3
//4
//5

//good morning => 5 time
// for (let i = 1; i <= 5; i++) {
//     console.log("Good morning")
// }

//reverse loop
//5 - 1 
// for (let i = 5; i >= 1; i--){ //4 3 2 1 0
//     console.log(i) // 5 4 3 2 1
// }

// i=5 5>=1
// i=4  4>=1
//i =3 3>=1
//i=2  2>=1
//i=1 1>=1
//i=0 0>=1


//table of 5
//5  =  50  

// 5  => 5+ 5 =>10
// 10
// 15

// for (let i = 5; i <= 50; i = i + 5) { //5+5 =>10  10+5 15+5
//     console.log(i) //5 10 15 20-----50
// }

//i =5 5<=50
//i=10 10<=50 
//i=15 15<=50
//i=20 20<=50



//loop
//for loop

// for(initialization;condtioncheck;incre/decre){
//     //statemenets
// }


//0-5
// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

// for (let i = 1; i <= 6; i++) {
//     console.log(i)
// }


//10-1

// for (let i = 10; i >= 1; i--) {
//     console.log(i)
// }
// //10  ----- 1  

//===============================================================

//break
//continue


//1 - 5 number  number==3 

// for (let i = 1; i <= 5; i++) {  //2  3
//     if (i == 3) {
//         break
//     }
//     console.log(i) //1
// }


//i=1  1<=5  true  1==3  false  ===>1
//i=2  2<=5   true 2==3  false  ====> 2
//i=3  3<=5  true  3==3 true => break


// for (let i = 1; i <= 10; i++) {
//     if (i > 3) {
//         break
//     }
//     console.log(i)
// }


// for(let i=0;i<5;i++){ //1  2  3
//     console.log(i) //0  1 2 3
//     if(i==3){
//         break
//     }
// }

//0 1 2 3



//=================================================

// //continue ==> loop  => perticular value escape

// //1-5  3  => 1 2 4 5

// for (let i = 1; i <= 5; i++) { //2 3  4 5 6
//     if (i == 3) {
//         continue
//     }
//     console.log(i) //1
// }

//i=1 1<=5 1==3  =>1
//i=2 2<=5  2==3  => 2
//i=3 3<=5  3==3
//i=4  4<=5  4==3  => 4
//i=5 5<=5  5==3  => 5
//i=6 6<=5


// for (let i = 0; i <= 5; i++) { //1  3
//     console.log(i) //0 1 2 3
//     if (i == 3) { //0==3 3==3
//         continue
//     }
// }










// let sum = 0//10
// sum = sum + 10  //0+10 =>10
// console.log(sum)