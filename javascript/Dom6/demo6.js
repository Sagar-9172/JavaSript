let heading =document.querySelector('h1')
console.log(heading)

let buttonA = document.querySelector('button')
console.log(buttonA)

let liElements = document.querySelectorAll('li')
console.log(liElements)

let idcolor=document.querySelector('#color')
console.log(idcolor)

// for(let i=0;i<liElements.length;i++){
//     console.log(liElements[i].textContent)
// liElements[i].style.color = "blue"
// }//(in this loop button is not workimg bcoz here not using click function)

buttonA.addEventListener('click',()=>{
for(let i=0;i<liElements.length;i++){
console.log(liElements[i].textContent)
liElements[i].style.color='green'
idcolor.style.color='red'
}
})

