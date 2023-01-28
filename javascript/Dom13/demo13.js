


let headingOne = document.querySelector('h1')
// class
let c1 = headingOne.className 
console.log(c1) // "two"
headingOne.classList.add('three') // "two three"
headingOne.classList.remove('two') // "three"
headingOne.classList.toggle('three')
headingOne.classList.toggle('three')

// <p id = "three" name = "nm" class = "four">paragraph</p>
let r = document.querySelector('p')
console.log(r)
let c2 = r.getAttribute('id')
let c3 = r.getAttribute('name')
console.log(c2)
console.log(c3)
r.setAttribute('data-cy',"one")


// action -- click 

let liList = document.querySelectorAll('li')
let ulList =  document.querySelector('ul')

// ulList.addEventListener('click',function(){
//     for(let i = 0 ; i < liList.length ; i++){
//         liList[i].style.color = "green"
//     }
// })

// ulList.addEventListener('dblclick',function(){
//     for(let i = 0 ; i < liList.length ; i++){
//         liList[i].style.color = "green"
//     }
// })

// ulList.addEventListener('mouseover',function(){
//     for(let i = 0 ; i < liList.length ; i++){
//         liList[i].style.color = "green"
//     }
// })

// ulList.addEventListener('mouseout',function(){
//     for(let i = 0 ; i < liList.length ; i++){
//         liList[i].style.color = "red"
//     }
// })