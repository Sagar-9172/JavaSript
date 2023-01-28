//<h1 id = "one" class = "heading">Heading</h1>

let tagName = document.querySelector('h1')
let idName = document.querySelector('#one')
let headOne = document.querySelector('.heading')
let ByC = document.querySelector('h1[name = "nm"]')

// javascript 

// update element 
// delete element 
// retrive element 
// add element 


// update attribute
// delete attribute 
// add attribute 
// retrive

// getElementById()
let byId = document.getElementById('one')
console.log(byId)


// html collection
let byClassName  = document.getElementsByClassName('fruits')
console.log(byClassName)
console.log(byClassName.length)


// node list
let byCss = document.querySelectorAll('.fruits')
console.log(byCss)
console.log(byCss.length)

// tagName

let cssSelector = document.querySelector('li')
console.log(cssSelector)

let tagNames = document.getElementsByTagName('li')
console.log(tagNames)


//document.getElementById()
//document.getElementsByClassName()
//document.getElementsByName()

// class
let headingTwoElement = document.querySelector('h2')
console.log(headingTwoElement.className)

headingTwoElement.classList.add('headTwob')
console.log(headingTwoElement)

headingTwoElement.classList.remove('headTwob')
console.log(headingTwoElement)

headingTwoElement.className = "new"
console.log(headingTwoElement)

// retrive , update, add , delete -- attrbution