
// floor
// console.log(Math.floor(12.6))//
// console.log(Math.floor(14.9))
// console.log(Math.floor(-12.5))
// console.log(Math.floor(-13.5))

// ceil
// console.log(Math.ceil(-13.5)) //-13
// console.log(Math.ceil(12.4))//13
// console.log(Math.ceil(15.4))//16
// console.log(Math.ceil(-17.4))//-17

// random
// Math.random()
//console.log(Math.random())//every time change the value
// console.log(Math.random()*6)// hear anny value in 0 to 6
// console.log(Math.floor(Math.random()*6))
//  console.log(Math.floor(Math.random()*6)+1)
// let randomNumber = Math.floor(Math.random()*6)+1
// console.log(randomNumber)
//............................................................

// create html file with extension .html
// ! and press tab 
// between body tag - add script file
// right click on file , copy file path on new browser tab
// right click >>> inspect >> console


// .........................................................

// program 1 ( guess the number ---chance 1)

// let randomNumber= Math.floor(Math.random()*6+1)
// console.log(randomNumber)
// let userInput = prompt('enter any number between 1 to 6')
// if(randomNumber == userInput){
//     console.log('Your guess is correct')
// }
// else{
//     console.log('Your guess is incorrect')
    
// }

// program 2
// randomNumber == userInput ? console.log('Your guess is correct'):('Your guess is incorrect')

// program 3 

// let randomNumber2 = Math.floor(Math.random()*6+1)
// console.log(randomNumber2)
// let userInput2;
// for (let i = 0; i < 5 ; i++){
//     userInput2 = prompt("enter any number between 1 to 6")
//     if(randomNumber2==userInput2){
//         console.log("Guess is correct")
//         break
//     }
//     else{
//         console.log(("Guess is incorrect"))
//     }
// }

// let randomNumber3 = Math.floor(Math.random()*6+1)
// console.log(randomNumber3)
// let userInput3;
//  console.log(userInput3)


// while(userInput3 != randomNumber3){
//     userInput3= prompt("Enter the number between 1 to 6")
//     if(userInput3 != randomNumber3){
//         console.log('Guess is correct')
//         //break
//     }
//     else {
//         console.log('Guess us incorrect')
    
//     }
// }