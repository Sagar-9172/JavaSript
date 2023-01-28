let ulList=document.querySelector("ul")
console.log(ulList)
let Addbutoon=document.querySelector("#new")
console.log(Addbutoon)
let inputElement=document.querySelector("input[type='text'] ")
console.log(inputElement)

Addbutoon.addEventListener("click",()=>{
    let text =inputElement.value
    let liElement =document.createElement("li")
    liElement.textContent=text
    createButtons(liElement)
    ulList.appendChild(liElement)
    inputElement.value=""
})

function createButtons(li){
let new1= document.createElement('button') 
new1.textContent = "Up" 
new1.className = "up" 
li.appendChild(new1)

let new2 = document.createElement('button') 
new2.textContent = "Down" 
new2.className = "down" 
li.appendChild(new2)

let new3 = document.createElement('button') 
new3.textContent = "Remove" 
new3.className = "remove" 
li.appendChild(new3)

let new4= document.createElement('button') 
new4.textContent = "Test" 
new4.className = "test" 
li.appendChild(new4)
}








