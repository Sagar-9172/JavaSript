let ollist=document.querySelector('ol')
let Addbutoon=document.querySelector('button')
let inputText=document.querySelector('input')

Addbutoon.addEventListener('click',()=>{
let text=inputText.value
let olelment=document.createElement('li')//<li></li>
olelment.textContent=text
ollist.appendChild(olelment)
inputText.value = " "
})


