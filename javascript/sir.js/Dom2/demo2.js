

// document.querySelector('h1').addEventListener('click',function(){
//     document.querySelector('h1').style.color = "green"   
// })

//   <p id = "four" class = "five" name = "six">I am learning js</p>

// tagName
let tagName = document.querySelector('p')
console.log(tagName)
// id 
let idN = document.querySelector('#four')
console.log(idN)
// class
let classN = document.querySelector('.five')
console.log(classN)
//common formula
//tagName[attribute="value"]
let attN = document.querySelector('p[name="six"]')
console.log(attN)