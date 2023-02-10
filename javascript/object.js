// object is descriptive
let vehicle = {
    color:"black",
    type:"fortuner",
    modelNo:123,
    average:30,
    horsepower:180
}

// retrive 
console.log(vehicle.modelNo)        //123
console.log(vehicle['modelNo'])     //123

// udapte 
vehicle.color = "blue"
console.log(vehicle)               //{  color: 'blue',type: 'fortuner',  modelNo: 123,  average: 30,  horsepower: 180 }
vehicle['color'] = "green"
console.log(vehicle)               //{ color: 'green', type: 'fortuner', modelNo: 123, average: 30, horsepower: 180 }

// add
vehicle. horsepower = 180
console.log(vehicle)              //{color: 'black', type: 'fortuner',   modelNo: 123, average: 30, horsepower: 180}
vehicle["class"] = "sport"
console.log(vehicle)              //{color: 'black', type: 'fortuner', modelNo: 123, average: 30, horsepower: 180, class: 'sport'}

// // delete
delete vehicle.color
delete vehicle['type']
console.log(vehicle)              //{ modelNo: 123, average: 30, horsepower: 180 }


let vehicle2 = {
    color : "blue",
    wheel:"four",
    modelNo:123
}
for(let property in vehicle ){
    // console.log(property,vehicle[property])
}
console.log(vehicle2["color"])


// ..........................................................................................................//

let students = [
    {
        firstname : "Sagar",
        lastname:"Nanavare",
        age:27,
        skills:['javascript','cypress']
    },
    {
        firstname : "mahesh",
        lastname:"shinde",
        age:20,
        skills:['javascript','cypress','sql'],
        education:'BE' 
    },
    {
        firstname : "sachin",
        lastname:"shinde",
        age:20,
        skills:['javascript','cypress','html'],
        education:'Bse'
    }
]

// // program1

console.log(students[0].firstname)//sagar
 console.log(students[0].lastname.length)//8

// program2

 students.forEach(function(el){
        console.log(el.firstname+":"+el.lastname.length)
    })// Sagar:8 mahesh:6 mahesh:6

//program3
    students.forEach(function(el){
    console.log(el.skills)
    el.skills.push('sql')
})
console.log(students)

// program 4
let aa1 = students.filter(function(el){
    return el.skills.includes('sql')
})
console.log(aa1)
// // method 1
aa1.forEach(function(el){
    console.log(el.firstname)
})
// method 2
students.forEach(function(el){
    if(el.skills.includes('sql')){
        console.log(el.firstname)
    }
})


// program 5
let aa2 = students.filter(function(el){
    return el.education  == "BE"
})
aa2.forEach(function(el){
    console.log(el.firstname)
})
students.forEach(function(el){
    if(el.age === 20){ 
        console.log(el.firstname)
    }
})

// program 6
// user with education BE and sql skills

let aa3 = students.filter(function(el){
    return el.education === "BE"  &&  el.skills.includes('sql')
})
aa3.forEach(function(el){
    console.log(el)
})
students.forEach(function(el){
    if(el.skills.includes('sql') && el.education == "BE"){
        console.log(el.firstname)
    }
})


// program 7
let aa4 = students.reduce(function(acc,el){
    return acc + el.age
},0)
console.log(aa4/students.length)



//-------------------------------------------------------
// Object requirement ----------------->

// User define datatype
// CURD
// C --> Create object

// Reuirement ->  Need to store info of student
// e.g Student ---> name, class, age, rollNo

// // Try -- >using string datatype ---->
// // Problem - All in string, Need to store single entity data in different variable
let SsnName = "sagar"
let calss = "BE"
let age = "25"
let rollNo = "12"

// // Try --> using array datatype ---->
// // Problem - Data is not self-descriptive
let ssn2Info = ["sagar", "BE", 25, 12]
//                   0      1     2  3

// We need to use object for store data in descriptive form
// Object  --> Stores information in descriptive way (self-Descriptive)

// CURD
// C - Create Datatype

//                                 We can create object by 3 way =>

// object syntax --->
// let/const/var variableName = { property1/key1 : "key1Value", property2/key2 : "key2Value"}

//----------------------------------------
//                                     1. Object literal ===>
// Example -->
let s = {
          firstName: "sagar",
          class: "BE",
          age: 25,
          rollNo: 12
}
console.log(s)

 s.firstName = "sourbh"

//                                              2. By creating instance of object   ===>

// class ----> creating object
// in js Object is a class --> Inbuild in javascript

// Example -->
let newObject = new Object()
console.log(newObject)            // {}
console.log(typeof (newObject))   // object
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
let sameer = Object.create({})
console.log(sameer)

// sameer.firstName = "sameer"
// sameer.lastName = "jaiswal"
// sameer.age = 28
// sameer.rollNo = 77
// sameer.skills = ["python","css","html", "javascript"]
// sameer.display = function(){
//     console.log(this.firstName + this.lastName)
// }

//console.log(sameer)


//-----------------------------------------------------
//                                            3. By using object constructor  ===>

class ss {
          constructor(fname, className, age, rollNo) {
                    this.firstName = fname
                    this.className = className
                    this.age = age
                    this.rollNo = rollNo
          }
}
let ssObject = new ss("sagar", "BE", 25, 12)
console.log(ssObject)  

//---------------------------------------------------
let student5 = {
          // Properties
          firstName: "sagar",
          age: 25,
          // Method
          // write : function(){
          //           console.log("He can write")
          // }  // ---> Function expression
          // ES-6
          write() {
                    console.log("hello")
          }
}
console.log(student5.firstName)
student5.write()   
// // Action - print msg
// // Return - undefined
console.log(student5.write())  // undefined
console.log(student5.firstName)
// -------------------------------------------------
 
let st1 ={
    fname:"sagar"
}
let st2 ={
    fname:"sourbh"
}


// -----------------------------------------
class student {
    // Properties
    firstName="sagar"
    age = 25

}

let MinStud = new student()
console.log(MinStud)


let subject={
    sub1:"economics",
    sub2:"polity",
    sub3:"scince",
    sub4:"science"
}
console.log(subject.sub1)
console.log(subject["sub2"])

subject.sub1="maths"
console.log(subject)
subject["sub2"]="hrd"

subject.sub5="hmt"
console.log(subject)
subject["sub6"]="ic engine"

delete subject.sub3
console.log(subject)



