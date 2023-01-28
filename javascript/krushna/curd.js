///=======================================

// U - Updating object(Insert/Update property)

// We have 3 way to insert properties in object ==>
// Def adding property - when going to add new property in object
// Def updating property - prev existing properties value can be update

//------------------------------------
// 1. Ouside the class -->

// let newObj = new Object()
// console.log(newObj)

// newObj.fname = "sagar"   // adding property
// console.log(newObj)
// newObj.fname = "Ganesh"
// console.log(newObj)     // updating property

// // Retrive property
// ObjectName.PropertyName  // Return property value
// ObjectName.PropertyName = value

// // Comparing with variable decleration
// let a = 10  // Assign value
// a = 20 // Updating value 

//-----------------------------------------
// 2. Using function ==>

// class student {
//           firstName = null
//           age = null
//           setFname(fname) {
//                     this.firstName = fname  // updating value
//           }
//           setAge(age) {
//                     this.age = age  // updating value
//           }
// }
// let Ram = new student()
// console.log(Ram)
// Ram.setFname("Nilesh")
// console.log(Ram)        // student { firstName: 'Nilesh', age: null }
// Ram.setAge(25)
// console.log(Ram)    // student { firstName: 'Nilesh', age: 25 }

//---------------------------------------------------------------------------
// 3. Using constructor ==>
// class student {
//           constructor(fname, age) {
//                     this.firstName = fname // updating property
//                     this.age = age
//           }
// }

// let Ram = new student("Ram", 10)
// console.log(Ram)     // student { firstName: 'Ram', age: 10 }
// Ram.MobNo = "123"
// console.log(Ram)   // student { firstName: 'Ram', age: 10, MobNo: '123' } // adding property

//----------------------------------------------
// D - Deleting property
// syntax => delete(keyword) Object.proprtyName
// delete Ram.MobNo
// console.log(Ram)  // student { firstName: 'Ram', age: 10 }

//------------------------------------------
// Inbuild methods of object --->
// Syntax ==> Object.methodName(ObjName)

// 1. keys()
// 2. values()
// 3. entries()
// 4. hasOwnProperty(Arug)

// Example -->
let student = {
    // Properties -->
    firstName: "Ganesh",
    age: 22,
    // Method -->
    write() {
              console.log("He can write");
    }
};

//------------------------------------------
// 1. keys(Arug)
// Arug ==> local object / object
// Action - Extracting object keys only
// Return - Array

console.log(Object.keys(student))  // [ 'firstName', 'age', 'write' ]

//----------------------------------------------
// 2. values(Arug)
// Arug ==> local object / object
// Action - Extracting object values only
// Return - Array

console.log(Object.values(student))  // [ 'Ganesh', 22, [Function: write] ]

//-------------------------------------
// 3. entries(Arug)
// Arug ==> local object / object
// Action - Extracting object propertes
// Return - Nested Array

console.log(Object.entries(student))   // [[ 'firstName', 'Ganesh' ],[ 'age', 22 ],[ 'write', [Function: write] ]]

//------------------------------------------------
// 4. hasOwnProperty(Arug)
// Arug ==> Object key (String)
// Action - Checking key is present in object
// Return - true/false (Boolean)

console.log(student.hasOwnProperty('firstName')) // true
console.log(student.hasOwnProperty('MobNO')) //false
// Not check values (values considering as key)
console.log(student.hasOwnProperty('Ganesh')) // false