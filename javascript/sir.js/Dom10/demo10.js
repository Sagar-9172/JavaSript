o
let addButton = document.querySelector('#addButton')
let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')

console.log(addButton)
console.log(inputText)
console.log(ulList)
ulList.addEventListener('click',function(e){
    // console.log(e.target)
    // console.log(e.target.tagName)
    // console.log(e.target.className)

    if(e.target.tagName === "BUTTON"){

        if(e.target.className == "remove"){
           let li =  e.target.parentElement
           let ul = li.parentElement
           ul.removeChild(li)

        }
        else if(e.target.className == "up"){
            let li =  e.target.parentElement
            let ul = li.parentElement
            let preLi = li.previousElementSibling
            if(preLi){
                ul.insertBefore(li,preLi)
            }
        }
        else if(e.target.className == "down"){
            let li =  e.target.parentElement
            let ul = li.parentElement
            let nextLi = li.nextElementSibling
            if(nextLi){
                ul.insertBefore(nextLi,li)
            }
        }


    }
})