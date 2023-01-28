// Set 
let ss = new Set()
console.log(ss)//{}

// add - to add elements to the set
ss.add('sagar')
ss.add('sagar')
ss.add('vishwajit')
console.log(ss)//{ 'sagar', 'vishwajit' }

// // set does not stores the value by index
console.log(ss[0])//undefined

// //------------------------------------------------------
let setz = new Set()
console.log(setz)
// // property size
let ww = setz.size
console.log(ww)//0

// // add the element to set  add()
setz.add('economicas')
setz.add('polity')
setz.add('history')
setz.add('geography')
setz.add('science')
setz.add('economics')
console.log(setz)//{ 'economicas','polity','history','geography','science','economics'}
console.log(setz.size)//6

//to check whether the element is present or not  has()
let z2 = setz.has('polity')
let z3 = setz.has('maths')
console.log(z2)//true
console.log(z3)//false

// deleting the particular element 

console.log(setz)
setz.delete('history')
console.log(setz)

//  property --- size 
// 3 method - add() , has() , delete()
// clearing the complete set 

setz.clear()
console.log(setz)//{}
console.log(setz[0])//undefined

// .....................................................................

let city = ["economics", "polity","history","science"]
city.forEach(function(el){
    console.log(el)//economics,polity,history,science
})

setz.forEach(function(el){
    console.log(el)
})
// ...............................................................................

let self = {
    firstName:"sagar",
    lastName:"nanavare",
    age:25,
    lang:"english"
}

console.log(Object.keys(self))//[ 'firstName', 'lastName', 'age', 'lang' ]
console.log(Object.values(self))//[ 'sagar', 'nanavare', 25, 'english' ]
console.log(Object.entries(self))//  [ 'firstName', 'sagar' ],[ 'lastName', 'nanavare' ],[ 'age', 25 ],[ 'lang', 'english' ]

for(let a of Object.keys(self)){
    console.log(a)//firstName,lastName,age,lang
}
for(let value of Object.values(self)){
    console.log(value)//sagar,nanavare,25,english
}
for(let item of Object.entries(self)){
    console.log(item)// [ 'firstName', 'sagar' ],[ 'lastName', 'nanavare' ],[ 'age', 25 ],[ 'lang', 'english' ]
}




// ...................................................
let names = new Set()
// second way to define set 
let friuts = new Set(["onion","mango","banana","apple","tomato","onion"])
console.log(friuts)
console.log(friuts[0])
// set does not stores the value by index

friuts.forEach(function(el){
    console.log(el)
})


// Object 
let selfinfo = {
    firstName:"sagar",
    lastName:"nanavare",
    age:25,
    rollNo:101
}

for(let key in info){
    console.log(key,selfinfo[key])
}


// object

let selfinfo2 = {
    firstName:"vishvajit",
    lastName:"ghadage",
    age:27,
    rollNo:123
}

for(let key of Object.keys(selfinfo2)){
    console.log(key)
}

for(let val of Object.values(selfinfo2)){
    console.log(val)
}

for(let KeyVal of Object.entries(selfinfo2)){
    console.log(KeyVal)
}

for(let [k,v] of Object.entries(selfinfo2)){
    console.log(k,v)
}


let setA = new Set([{firstName:"sagar"},{firstName:"mahesh"},{firstName:"ganesh"},{firstName:"mahesh"}])
console.log(setA)


for(let {firstName} of setA.keys()){
    console.log(firstName)
}
for(let x of setA.values()){
    console.log(x)
}
for(let x of setA.values()){
    console.log(x)
}


let setB= new Set(["banana","mango","onion"])
console.log(setB)


for(let key of setB.keys()){
    console.log(key)
}

let setC = new Set(
    [

        {
            firstName:"krushna",
            lastName:"shinde"

        },

        {
            firstName:"mahesh",
            lastName:"kadam"

        }

    ]

)

console.log(setC)

for(let {firstName,lastName} of setC.keys()){
    console.log(firstName,lastName)
}








