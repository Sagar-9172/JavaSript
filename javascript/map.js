let mapA = new Map()
// properties and method
console.log(mapA.size)

mapA.set("sagar","nanavare")
mapA.set("age",25)
mapA.set("education","BE")
console.log(mapA)


let name = new Map()
console.log(name)

// Property
console.log(name.size)

// set()
name.set("sagar","nanavare")
name.set("age",25)
name.set("education","BE")

console.log(name)
console.log(name.size)

// // get()
let q1 = name.get(1)
console.log(q1)

// //delete 
name.delete(1)
console.log(name)
name.delete(2)
console.log(name)


// // has()
let q2 = name.has(3)
console.log(q2)

let skill = new Map(
    [
        ['A',"airthmetic"],
        ["B","bachlor"],
        ["C","communication"],
        ["D",'degree']
    ]
)
console.log(skill)

skill.forEach(function(el){
    console.log(el)
})

for(let prop of skill.keys()){
    console.log(prop)
}

for(let val of skill.values()){
    console.log(val)
}

for(let [k,v] of skill.entries()){
    console.log(k,v)
}


// ...............................................

// let a = new Map()
let b = new Map([
    ['x',"x-ray"],
    ['y','yellow'],
    ['z','zomato']
])


// ---------------------------------> 

let game = new Map(
    [
      
        ['trophy of bandminton','thomus cup'],
        ['trophy of cricket','ipl'],
        ['trophy of football','fifa']
        ['trophy of	tennis','Davis Cup']
    ]
)

console.log(game.get('trophy of cricket'))

let count = 0
for(let [k,v] of game.entries()){
    //console.log(k,v)
    if(k.startsWith('t')){
    //    let userInput =  prompt(k)
       if(userInput === v){
            count = count + 1
       }
    }
}

if(count === 4){
    console.log('Gold')
}
else if(count === 3){
    console.log('Silver')
}
else if(count === 2){
    console.log('Bronze')
}
    else if(count === 1){
        console.log('Bronze')
}
else {
    console.log('Please try again')
}



let count2 = 0
for(let [k,v] of game.entries()){
    //console.log(k,v)
   
       if(userInput === game.get(k)){
            count2 = count2 + 1
       }
    }


if(count2 === 3){
    console.log('Gold')
}
else if(count2 === 2){
    console.log('Silver')
}
else if(count2 === 1){
    console.log('Bronze')
}
else {
    console.log('Do not try again')
}

