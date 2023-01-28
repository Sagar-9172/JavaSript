
let ulList = document.querySelector('ul')
let buttonId = document.querySelector('#addButton')
let inputElement = document.querySelector('input')



buttonId.addEventListener('click',  ()=> {
    let text = inputElement.value
    let liElement = document.createElement('li')
    liElement.textContent = text 
    createButtons(liElement)
    ulList.appendChild(liElement)
    inputElement.value = " "
})

function createButtons(li) {
    let mobile4 = document.createElement('button') 
    mobile4.textContent = "Price" 
    mobile4.className = "price" 
    li.appendChild(mobile4)

    let mobile1 = document.createElement('button') 
    mobile1.textContent = "Remove" 
    mobile1.className = "remove" 
    li.appendChild(mobile1)

    let mobile2 = document.createElement('button') 
    mobile2.textContent = "Up"
    mobile2.className = "up" 
    li.appendChild(mobile2)

    let mobile3 = document.createElement('button') 
    mobile3.textContent = "Down" 
    mobile3.className = "down" 
    li.appendChild(mobile3)


}