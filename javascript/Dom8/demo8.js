


let ulList = document.querySelector('ul')
let addButton = document.querySelector('#addButton')
let input = document.querySelector('input')

console.log(ulList)
console.log(addButton)
console.log(input)

// add element 
addButton.addEventListener('click',function(){
    let text = input.value
    let liList = document.createElement('li') // <li></li>
    liList.textContent = text // <li>orange</li>
    createButtons(liList)
    ulList.appendChild(liList)
    input.value = " "

})

// remove,up and down
ulList.addEventListener('click',function(event){
    console.log(event.target) //returns element
    console.log(event.target.tagName) // return tagName(capital)
    console.log(event.target.className) // return className

    if(event.target.tagName == "BUTTON"){
        
        if(event.target.className == "remove"){
            let liElement = event.target.parentElement
            let ulList = liElement.parentElement
            ulList.removeChild(liElement)
        }
        else if(event.target.className == "up"){
            let liElement = event.target.parentElement // li(banana)
            let ulList = liElement.parentElement // ul
            let prevLi = liElement.previousElementSibling // li(apple)
            if(prevLi){
                ulList.insertBefore(liElement,prevLi)  
            }
        }

        else if(event.target.className == "down"){
            let liElement = event.target.parentElement 
            let ulList = liElement.parentElement 
            let nextLi = liElement.nextElementSibling
            if(nextLi){
                ulList.insertBefore(nextLi,liElement)
            }
        }
    }



})





// add buttons 

function createButtons(li){

   let remove =  document.createElement('button')
   remove.textContent = "Remove"
   remove.className = "remove"
   li.appendChild(remove)

   let up =  document.createElement('button')
   up.textContent = "Up"
   up.className = "up"
   li.appendChild(up)

   let down =  document.createElement('button')
   down.textContent = "Down"
   down.className = "down"
   li.appendChild(down)



}