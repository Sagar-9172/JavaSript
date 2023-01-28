
let ulList = document.querySelector('ul')
let buttonId = document.querySelector('#addButton')
let inputElement = document.querySelector('input')
buttonId.addEventListener('click', function () {
    let text = inputElement.value
    let liElement = document.createElement('li') // <li></li>
    liElement.textContent = text // <li>Payapa</li>
    createButtons(liElement)

    // <li>Payapa
    // <button class="remove">Remove</button>
    // <button class="up">Up</button>
    // <button class="down">Down</button>
    //</li>
    ulList.appendChild(liElement)
    inputElement.value = " "
})

{/* <button class="remove">Remove</button>
<button class="up">Up</button>
<button class="down">Down</button> */}

function createButtons(li) {
    let r = document.createElement('button') // <button></button>
    r.textContent = "Remove" // <button>Remove</button>
    r.className = "remove" // <button class = "remove">Remove</button>
    li.appendChild(r)

    let u = document.createElement('button') // <button></button>
    u.textContent = "Up" // <button>Up</button>
    u.className = "up" // <button class = "up">Up</button>
    li.appendChild(u)

    let d = document.createElement('button') // <button></button>
    d.textContent = "Down" // <button>Down</button>
    d.className = "down" // <button class = "down">Dpwn</button>
    li.appendChild(d)
}








// console.log(ulList)
// console.log(buttonId)
// console.log(inputElement)