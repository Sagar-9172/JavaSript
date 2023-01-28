

let a = 10
console.log(typeof a)

let b = true
console.log(b)

let c = "sagar"
console.log(c)

let name = ["sagar", "shivaji", "nanavare"]
console.log(name[0])
console.log(name[1])
console.log(name[2])


let days = ["monday", "tuesday", "sunday"]
let g = days.length
console.log(g)
console.log(days.length)

for (i = 0; i < days.length; i++) {
    console.log(days[i])
    console.log(i)
}


// Methods of Array-- >

//                                1.push     (action adding the element at the end of array)(return -length of new array)

let a1 = ['sagar', 'somnath', 'sachin', 'navnath']
let b1 = a1.push('vishvajit', 'rahul')
console.log(b1)//6


//                              2.unshift    (action - adding the element at the start of array)(return -length of new array)            

let a2 = ['sagar','somnath','sachin','navnath']
let b2 = a2.unshift('rahul')
console.log(b2)//5

//                               3.pop         (action - remove the element at the end of array)(return -removed element)

let a3 = ['sagar','somnath','sachin','navnath']
let b3 = a3.pop()
console.log(b3)//navnath

//                       4.shift  (action - remove the element at the start of array)(return -removed element)

let a4 = ['sagar','somnath','sachin','navnath']
let b4 = a4.shift()
console.log(b4)//sagar

//                       5.includes (action-searching the element )(return-boolean value)

let a5 = ['sagar','somnath','sachin','navnath']
let b5 = a5.includes("sagar")
console.log(b5)//true

//                       6.join (action - join the element )(return -string) 

let a6 = ['sagar','somnath','sachin','navnath']
console.log(a6.join())
let b6 = a6.join(" @ ")
console.log(b6)//sagar @ somnath @ sachin @ navnath


//                             for loop

// In for loop using push method

let birthyear1 = [2001,2002,2003,2004]
let ages = []
for (i=0;i<birthyear1.length;i++){
   let   c= 2022-birthyear1[i]
   ages.push(c)
}
console.log(ages)// [ 21, 20, 19, 18 ]

//                                         7.map method 

// example 1
let birthyear2 = [2001,2002,2003,2004]
c1=birthyear2.map((el,index,array)=>{
return 2022-el
})
console.log(c1)//[ 21, 20, 19, 18 ]

// example 2
let numbers1=[12,21,24,56,45]
let c2 = numbers1.map(function(el,index,array){
    return el * 10
})
console.log(c2)

//                                     for loop

let number2 = [20,30,40,50,60]
let above40 = []
for (i=0 ; i<number2.length; i++){
if(number2[i]<40)
above40.push(number[i])
}
console.log(above40)//[ 20, 30 ]

//                                      8.filter
let number3 = [20,30,40,50,60]
dd=number3.filter(function(el,index,array){
return el < 40
})
console.log(dd)//[ 20, 30 ]

// .................................................................

let numbers5 = [50,20,31]
let total = 0

for(let i = 0 ; i <  numbers5.length ; i++){
    total = total + numbers5[i]
}
console.log(total)

//                                       9 using reduce method

let numbers6 = [50,20,31]
let c3 = numbers6.reduce(function(acc,el,index,array){
return acc + el 
},0)
console.log(c3)

//                                           10 .forEach()

let names = ["sagar","sachin","ganesh","akshay"]
names.forEach(function(el,index,arr){
    console.log('congratulations'+" "+el)
})
//  ............................................................                                   

let number1 = [500,200,50,20,600]
//                                             11.find
let d1 = number1.find(function(el){
    return el > 100
})
console.log(d1)


//                                             12.findIndex

let d2 = number1.findIndex(function(el){
    return el > 100
})
console.log(d2)

//                                             12. findIndex(callBackfunction, thisvalue)

// Action - Finding first occurance of value
// Return - index number (number)

// if element is not exist in array then return -1

let arr8 = [1, "Hi", 8, 3, 0]
let output = arr8.findIndex((el, ind, arr) => {
          console.log(el) // 
        //   console.log(el > 2)
          return el > 1
})
console.log(output) // 2(index no)

let output2 = arr8.findIndex((el, ind, arr) => {
          console.log(el)
          console.log(el > 2)
          return el > 2 || el == "Hi"
})
console.log(output2)
//          .........................................................

 let jj = [15,20,53,65,89,312,612,680]
// //                                             13 some
let e1 = jj.some(function(el,index,arr){
    return el > 500
})
console.log(e1) //true

//                                             14 every

let e2 =jj.every(function(el,index,arr){
    return el < 50
})
console.log(e2)//false

//  ..................................................................


//               0        1       2       3         4
let fruits = ["apple" ,"banana","mango","orange",'dragnfruit']

//                                  15 slice (start Value , end Value(not includedthe end value))


let f1 = fruits.slice(1)
console.log(f1)//[ 'banana', 'mango', 'orange', 'dragnfruit' ]

let f2 = fruits.slice(1,4)
console.log(f2)//[ 'banana', 'mango', 'orange' ]

let f3 = fruits.slice(0,-1)
console.log(f3)//[ 'apple', 'banana', 'mango', 'orange' ]

let f4 = fruits.slice(-3)
console.log(f4)//[ 'mango', 'orange', 'dragnfruit' ]

let f5 = fruits.slice(-5,-2)
console.log(f5)//[ 'apple', 'banana', 'mango' ]

let f6 = fruits.slice(-5,2)
console.log(f6)//[ 'apple', 'banana' ]

let f7 = fruits.slice(-1,-5)
console.log(f7)//[]

//                                       16 splice()

let fruits2 = ["apple" ,"banana","mango","orange",'dragnfruit'] 

// delete element on index 1
fruits2.splice(1,1)
console.log(fruits2)//[ 'apple', 'mango', 'orange', 'dragnfruit' ]

// delete and replace 
fruits2.splice(2,2,"sagar","nanavare")
console.log(fruits2)//[ 'apple', 'mango', 'sagar', 'nanavare' ]


//                                               17 flat()

let ar = [[11,22,33],[44,55,66],[77,88,99]]
console.log(ar[0][2])//33
console.log(ar[1][2])//66
console.log(ar[2][2])//99
let a9 = ar.flat()
console.log(a9)//[ 11, 22, 33, 44, 55,66, 77, 88, 99 ]

//                                                 18 indexOf()
// arug = array value
// start = index no. (Starting point)

let a10  = [11,33,44,55,66]
let a11 = a10.indexOf(44)
console.log(a11)


//                                                  19 at()

let cars = ["swift","harrir","fortuner","verna"]
let a12 = cars.at(1)
console.log(a12)//harrir
 
//                                                 20 concat()
 
let aa = [1,2,3]
let bb = [11,22,33]
let cc = aa.concat(bb)
console.log(cc)//[ 1, 2, 3, 11, 22, 33 ]

let dd = bb.concat(aa)
console.log(dd)//[ 1, 2, 3, 11, 22, 33 ]

//                                       21. fill(element, StartPoint, endPoint)

// Action - replace/fill elements in b/t passed points
// Return - updated array (Array)
// EndPoint not including

var arr = ["a", "b", "c", 2]

// + ve indexing
console.log(arr.fill(true, 1, 3))
console.log(arr)

// - ve indexing
console.log(arr.fill(true, -3, -1))
console.log(arr)

// not decleared end point
console.log(arr.fill(true, -3))
console.log(arr)

//                                                 22. reverse()

// Action - Reverse base array
// Return - Reversed array (Array)

var arr = ["a", "b", "c", 2]
console.log(arr.reverse())  // [ 2, 'c', 'b', 'a' ]
console.log(arr)


//                                                     23. sort()

// By default no arug

// Action - String arrange in Alphabetically
// Return - updated sort array (Updated Array)

// Works fine for string

let arr = ["kk", "Ganesh", "Sagar", "Rushi"]

console.log(arr.sort())  /// [ 'Ganesh', 'Rushi', 'Sagar', 'kk' ]
console.log(arr)   // Updating base array

// -------------------------------------------------------------------------------------------------
// js is case sensitive lang

let arr2 = ["Kk", "Ganesh", "Sagar", "Rushi"]
console.log(arr2.sort())  /// [ 'Ganesh', 'Kk', 'Rushi', 'Sagar' ]

let arr3 = ["Kk", "Ganesh", "Sagar", "Rushi", "kk", "ganesh", "sagar", "rushi"]
console.log(arr3.sort())  /// ['Ganesh', 'Kk', 'Rushi', 'Sagar', 'ganesh', 'kk', 'rushi', 'sagar']

// ---------------------------------------------------------------------
// Sort() for numbers===>

// Sort() applied on Single-digit numbers  ---->

let numArray0 = [1, 5, 4, 6, 7, 2, 3]

numArray0.sort()
console.log(numArray0)  // [1, 2, 3, 4, 5, 6, 7]

numArray0.reverse()
console.log(numArray0)// [7, 6, 5, 4, 3, 2, 1]

// --------------------------------------------------------

// Method chaining  ---->
// numArray.sort().reverse()

// ---------------------------------------------------------

// Sort() applied on multi-digit numbers  ---->

let numArray2 = [16, 50, 449, 62, 71, 201, 345]
numArray2.sort()
console.log(numArray2) //[ 16, 201, 345, 449, 50,  62,  71]

// ---------------------------------------------------------------

// Arug  ---> callback Function
// function(a,b){ return a - b}

numArray2.sort(function (a, b) { return a - b })
console.log(numArray2)    // [16,  50,  62, 71, 201, 345, 449 ]

// -----------------------------------------------\

let numArray = [1, 5, 4, 6, 7, 2, 3]
numArray.sort(function (a, b) { return b - a })
console.log(numArray)  // [ 7, 6, 5, 4, 3, 2, 1]


