
// tagName 
let tagName = document.querySelector('h2')
console.log(tagName)
// ..................................................
// id 
let byId = document.querySelector('#lastname')
console.log(byId)
// ..................................................
//class
let byClass = document.querySelector('.fullname')
console.log(byClass)
// ..................................................
//css selector
let byName = document.querySelector('h2[name="sirname"]')
console.log(byName)
// ...................................................
// program 1
// updating the text nanavare elelment
console.log(byName.textContent)
byName.textContent="sss"
// ...................................................
//program2
//updating the text of sss element on click
byName.addEventListener('click',()=>{
    byName.textContent ="nnn"
})
// ...................................................
//program3
let colorchange = document.querySelector('h1')
console.log(colorchange)
colorchange.addEventListener('mouseover',()=>{
    colorchange.style.color = "black"
})
colorchange.addEventListener('mouseout',()=>{
    colorchange.style.color = "green"
})


