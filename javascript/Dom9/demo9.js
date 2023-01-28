
//<h1 id = "one" , class = "two" name="nm">Heading<h1/>
//  Why javascript??
// To make the things dynamic?? 
// creating element s, updating element s , retriving element s , deleting element s
// updating text 
// updating , deleting  ,adding and retrive attribut of element
//on What ??
// user action --- click , mouseover , mouseout , load


//<h1 class = "one"  id = "two" name = "three">heading One</h1>

// css selector

// id 
// let idName = document.querySelector('#two')
// console.log(idName)
// // className 
// let className = document.querySelector('.one')
// console.log(className)
// // tagName
// let tagName = document.querySelector('h1')
// console.log(tagName)
// // css selector cF
// let  commF = document.querySelector('h1[name="three"]')
// console.log(commF)

//console.log(idName,className,tagName,commF)

// userAction

// console.log(idName.textContent)
// idName.textContent = "headTwo"

// program 1
// idName.addEventListener('click',function(){
//     idName.textContent = "headTwo" 
// })
//Program2

// let h1 = document.querySelector('h1')
// let button = document.querySelector('button')

// button.addEventListener('click',function(){
//     h1.style.color = "green"
// })


// Program3

// let headone = document.querySelector('h1')
// let addButton = document.querySelector('button')
// let inputText = document.querySelector('input')

// addButton.addEventListener('click',function(){
//     let text =  inputText.value
//     headone.style.color = text
//     inputText.value = ""
// })

// Program 4
// let buttonA = document.querySelector('button')
// let input = document.querySelector('input')
// let ulList = document.querySelector('ul')

// buttonA.addEventListener('click',function(){
//     let text = input.value
//     let li = document.createElement('li')
//     li.textContent = text
//     ulList.appendChild(li)
//     input.value =""
// })

// Program 5
let buttonA = document.querySelector('button')
let nodeList = document.querySelectorAll('li')
console.log(nodeList)

buttonA.addEventListener('click',function(){
    for (let i = 0; i < nodeList.length; i++) {
        if (i % 2 == 0) {
            nodeList[i].style.color = "green"
        }
        else {
            nodeList[i].style.color = "red"
        }
    }
})