
let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonB = document.querySelector('button')

console.log(ulList)
console.log(inputText)
console.log(buttonB)

buttonB.addEventListener('click',function(){
    let text = inputText.value
    //console.log(text)
    let liElement = document.createElement('li') // <li></li>
    liElement.textContent = text // <li>Papaya</li>
    ulList.appendChild(liElement)
    inputText.value = " "
})