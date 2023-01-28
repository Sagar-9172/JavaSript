
// img ---- ex2tension jpeg , png 
// pdf  --- .pdf
// python .py
// java -java 
// javascript .js

let x = 10
console.log(x)
x = 300
console.log(x)

const i = 900
console.log(i)
//i = 90

// arthimetic operation

// addition , subtraction , multiplication , division , modulus

let a1 = 100
let b1 = 50

console.log(a1+b1)
console.log(a1-b1)
console.log(a1*b1)
console.log(a1/b1)
console.log(a1%b1)

let q = 90
let r1 = 45

console.log(q+r1)
console.log(q-r1)
console.log(q*r1)
console.log(q/r1)
console.log(q%r1)


// DRY principle
// 10 pair ------> 50 lines

function Calculator(x2,y){
    console.log(x2+y)
    console.log(x2-y)
    console.log(x2*y)
    console.log(x2/y)
    console.log(x2%y)
}
Calculator(12,6)
Calculator(15,5)




























// Footer
// © 2022 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About
// javascript630/script.js at main · Minskoleopc/javascript630 · GitHub



let x2  = 10
console.log(x2)
x2 = 300
console.log(x2)

const u  = 800
console.log(u)
//u = 100

let a = 100
let b = 50

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

let s = 100
let t = 10

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

// function 
function Calculator(x2,y){
    console.log(x2+y)
    console.log(x2-y)
    console.log(x2*y)
    console.log(x2%y)
    console.log(x2/y)
}
Calculator(12,6)
Calculator(10,5)


// function without parameter and without return type
function add(){
    console.log(9+9)
}
add()
add()
add()
add()

// function with parameter and without return type

function addB(x2,y){
    console.log(x2+y)
}
addB(12,1)
addB(10,1)
addB(1,1)

// function with parameter and with return type 
// 100 given 
// 100 show

function addC(x2,y){
    return x2 + y // 17
}
let q1 = addC(12,5)
console.log(q1)
console.log(q1 + 100)
console.log(q1 - 5)



// .....................................................................

// let and const 

let x3 = 100
console.log(x3)
x3 = 600
console.log(x3)

// const 
const h = 800
//h = 100
console.log(h)

// Arithmetic operator

// + - * / %


let q8 = 100
let q2 = 50
console.log(q8 + q2)
console.log(q8 - q2)
console.log(q8 * q2)
console.log(q8 / q2)
console.log(q8 % q2)

let q11 = 10
let q22 = 5
console.log(q11 + q22)
console.log(q11 - q22)
console.log(q11 * q22)
console.log(q11 / q22)
console.log(q11 % q22)

// functions

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(100,5)
Calculator(1000,50)

// function without parameter and with return type 

function addA(){
    console.log(6+6)  
}
addA()
addA()
addA()

// function with parameter and with out return type
function addB(x,y){
    console.log(x+y)
}
addB(12,4)
addB(10,5)
addB(2,4)

// function with parameter and with return type 
function addC(x,y){
    return x + y
}
let a11 = addC(1,2)
console.log(a11)
console.log(a11 + a11)
console.log(a11 * 0.10)

// Three ways to write function in javascript

// function declaration
function additionE(x,y){
    return x + y
}
let a111  = additionE(12,3)
console.log(a111)

// function expression 
let additionF = function(x,y){
    return x + y
}
let a2 = additionF(12,3)
console.log(a2)

// arrow function 
let additionG = (x,y)=>{
    return x + y
}
let a3 = additionG(12,3)
console.log(a2)


//-------------------------------------------

// function declaration
function additionR(x,y){
    return x + y
}
let q111 = additionR(12,3)
console.log(q111)

// function expression
let  additionRR = function(x,y){
    return x + y
}
let q222 = additionRR(12,6)
console.log(q222)


// arrow function
let  additionRRR = (x,y)=>{
    return x + y
}
let q2222 = additionRRR(12,6)
console.log(q2222)