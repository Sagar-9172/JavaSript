// id
let idx=document.querySelector("#x")
console.log(idx)

// class
let classy=document.querySelector(".y")
console.log(classy)

// tagname(atrribute["text"])
let tagnamez=document.querySelector('h1[text="z"]')
console.log(tagnamez)

// tagName
let tagnamehh = document.querySelector('h1')
console.log(tagnamehh)


// program 1(select the demo4.html)
tagnamehh.addEventListener("click",()=>{
    tagnamehh.textContent="Shree Ganesh"
    tagnamehh.style.color="blue"
})


// program 2(select the demo42.html)
let aa =document.querySelector("h1")
console.log(aa)
let bb=document.querySelector("button")
console.log(bb)
        //update//
bb.addEventListener('click',()=>{
    aa.textContent="Shree Ram"
    aa.style.color="red"
    aa.style.background="black"
})

// program 3(select the demo43.html)
let selecth1 =document.querySelector('h1')
let inputText=document.querySelector('input')
let choosebutton=document.querySelector('button')
choosebutton.addEventListener('click',()=>{
    let colorText=inputText.value
    selecth1.style.color=colorText
    inputText.value=''
})































