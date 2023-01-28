


// <h1 id = "one" class = "two" name = "nm">Headone</h1>
// create element , update element , retrive element , delete element
// add attribute , delete attribute , uddate attributr, retrive

// retrive

// tagName
let headOne = document.querySelector('h1')
let idN = document.querySelector('#one')
let classN = document.querySelector('.two')
let cF = document.querySelector('h1[name="nm"]')
let nodeList = document.querySelectorAll('.fruits')

// console.log(headOne)
// console.log(idN)
// console.log(classN)
// console.log(cF)
// consle.log(nodeList)

let e1 = document.getElementById('one')
console.log(e1)

let liList = document.getElementsByTagName('li')
let liListNl = document.querySelectorAll('li')
console.log(liList)
console.log(liListNl)


let className = document.getElementsByClassName('fruits') // Html collection
let classNameNl = document.querySelectorAll('.fruits') // nodeList
console.log(className)
console.log(classNameNl)

// Html collection updates with changes on UI
// nodeList does not update

// ------------ Retrive ---------------
// document.getElementsByClassName('fruits')
// document.getElementsByTagName('li')
// document.getElementById('one')

// Retrive

let headTwo = document.querySelector('h2')
let text = headTwo.className
console.log(text)

// adding class 

headTwo.classList.add('four')
headTwo.classList.add('five')

// remove class 
headTwo.classList.remove('four')
// updating class
headTwo.className = "six"
// toggle

headTwo.classList.toggle('six')
headTwo.classList.toggle('six')

// class attribute --- add , remove , update , toggle

let headThree =document.querySelector('h3')
headThree.classList.add('g')

// other attributes

let h4 = document.querySelector('h4')
console.log(h4.getAttribute('id'))

h4.setAttribute('name',"k")