// Struture - Destructure

// progream 1

let names = ["sagar","ram","sham","ganesh"]

let [a1,a2,a3,a4]= names
console.log(a1)//sagar

// program 2
let fruits=[['orange','mango'],['banana','apple'],['lemon','paynapal']]
let [a,b,c]=fruits
console.log(b)//[ 'banana', 'apple' ]

let [[b1,b2],[b3,b4],[b5,b6]] = fruits
console.log(b2)//mango

// program 3
let students = {
    firstname: 'vishvajit',
    lastname: 'ghadage',
    age: 27

}
let { firstname: c1, lastname: c2 } = students
console.log(c1)//vishvajit


// program 4
let vehicle = {
    brand: "mahindra",

    fourwheel: {
        name: 'fortuner',
        color: 'white',
        number: 5254,
    }

}
let { brand: d1, fourwheel: { name: e2, color: e3, number: c4 } } = vehicle
// console.log(d1)//mahindra
console.log(e2)//fortuner
console.log(e3)//white
console.log(c4)//5254

// ................................

// program 5
let subject = [
    {
        name: 'economics',
        topic: 'poverty'
    },

    {
        name: 'polity',
        topic: 'parliment'

    }

]
let[{name:h1,topic:h2},{name:h3,topic:h4}]=subject

console.log(h1)//economics
console.log(h2)//poverty
console.log(h3)//polity
console.log(h4)//parliment

// program 6

let sagar = {
    skills:["javascript","cypress"],
    lang:"marathi",
    education :'BE'
}
let {skills:[g1,g2], lang:g3,education:g4} = sagar

console.log(g1)
console.log(g2)
console.log(g3)
console.log(g4)