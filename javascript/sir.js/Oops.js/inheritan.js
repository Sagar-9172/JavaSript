
// student --- firstName  , lastName , age , adharCarNumber
// teacher  -(firstName  , lastName , age , adharCarNumber) , salary
// professor - (firstName  , lastName , age , adharCarNumber ,salary) , specialzation

// class Student {
//     firstName =  "chinmay"
//     lastName = "deshpande"
//     age = 33
//     adharCard = 123

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// class Teacher  extends Student{

    // inheriting from student 
    // firstName =  "chinmay"
    // lastName = "deshpande"
    // age = 33
    // adharCard = 123
    salary = 1000


    // inheriting from student 
    // displayName(){
    //     console.log(this.firstName + this.lastName)
    // }
// }

// class Professor extends Teacher {
//     specialization = "English"
// }

// let chinmay = new Professor()
// console.log(chinmay)
// chinmay.displayName()

// let chinmay = new Teacher()
// console.log(chinmay)
// chinmay.displayName()

// let chinmay = new Student()
// console.log(chinmay)
// chinmay.displayName()


// // program 2

// class StudentB {
//     constructor(firstName ,lastName ,age, adharCard){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.adharCard = adharCard
//     }

//     displayName(){
//         console.log(this.firstName+ this.lastName)
//     }
// }

// class TeacherB  extends StudentB{
//     salary = 5000
// }

// let amol = new TeacherB("amol","rao",23,56)
// console.log(amol)

// program 3


// class StudentC {
//     constructor(firstName ,lastName ,age, adharCard){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.adharCard = adharCard
//     }

//     displayName(){
//         console.log(this.firstName+ this.lastName)
//     }
// }

// class TeacherC  extends StudentC{
//     constructor(firstName ,lastName ,age, adharCard,salary){
//         super(firstName ,lastName ,age, adharCard)
//         this.salary = salary
//     }
// }

// let amol = new TeacherC("amol","rao",23,56,80000)
// console.log(amol)
// let amol = new StudentB("amol","rao",23,34)
// console.log(amol)


// *************************************************************************
//                               Day 9


// class GrandFather {
//     firstName = "manohar"
//     lastName = "deshpande"
//     displayName(){
//         console.log(this.firstName+this.lastName)
//     }

// }

// class Father extends GrandFather{
//     fatherFirstName = "shirish"
//     displayNameFName(){
//         console.log(this.fatherFirstName + this.lastName)
//     }
// }

// class Son extends Father {
//     sName = "chinmay"
//     displaySonName(){
//         console.log(this.sName + this.lastName)
//     }
// }

// let chinmay = new Son()
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.fatherFirstName)
// console.log(chinmay.sName)
// chinmay.displayName()
// chinmay.displayNameFName()
// chinmay.displaySonName()



// let shirish  = new Father();
// console.log(shirish.firstName)
// console.log(shirish.lastName)
// console.log(shirish.fatherFirstName)
// shirish.displayNameFName()
// shirish.displayName()



// let manohar = new GrandFather()
// manohar.displayName()

// // Program 2

// class GrandFather {
//     constructor(firstName,lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     displayName(){
//         console.log(this.firstName+this.lastName)
//     }
// }

// class Father extends GrandFather {
//     firstFName = "shirish"
// }

// let shirish = new Father("manohar","deshpande")

// Program 2
// class GrandFather {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     displayName() {
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Father extends GrandFather {
//     constructor(firstName,lastName,firstFname) {
//         super(firstName,lastName)
//         this.firstFname = firstFname
//     }

//     displayFName(){
//         console.log(this.firstFname + this.lastName)
//     }
// }

// class Son extends Father {
//     constructor(firstName, lastName,firstFname,sName){
//         super(firstName, lastName,firstFname)
//         this.sName = sName
//     }
//     displaySName(){
//         console.log(this.firstFname + this.lastName)
//     }
// }
// let chinmay =  new Son("manahor","deshpande","shirish","chinmay")
// chinmay.firstName
// chinmay.lastName
// chinmay.firstFname
// chinmay.Son
// chinmay.displayName()
// chinmay.displayFName()
// chinmay.displaySName()

// let shirish = new Father("manohar", "deshpande","shirsh")
// let manohar = new GrandFather("manohar","deshpande")
// console.log(manohar.firstName)
// console.log(manohar.lastName)
// manohar.displayName()

// // program 3
// class Mother {
//     constructor(fn,ln){
//         this.firstFname = fn
//         this.lastName = ln
//     }
//     displayMname(){
//         console.log(this.firstFname + this.lastName)
//     }
// }
// class SonA extends Mother {
//     constructor(fn,ln,sn){
//         super(fn,ln)
//         this.sname = sn
//     }
//     displaySname(){
//         console.log(this.sname + this.lastName)
//     }
// }
// class Daughters  extends Mother {
//     constructor(fn,ln,dn){
//         super(fn,ln)
//         this.dname = dn
//     }
//     displayDname(){
//         console.log(this.dname + this.lastName)
//     }
// }

// let chinmaya = new SonA("kanchan","deshpande","chinmay")
// let gauri = new SonA("kanchan","deshpande","gauri")

// ...................................................................

//                                   day 10


//  class Addition {
//     add(x){
//         console.log(x)
//     }

//     add(x,y){
//         console.log(x+y)
//     }
//     add(x,y,z){
//         console.log(x+y+z)
//     }

//  }

//  let a = new Addition()
//  a.add(1,3,4)

// same class , same method name different signature (overloading)

// class Addition {
//     additionA(x,y,z){
//     //console.log(x,y,z)
//         if(x != undefined && y != undefined && z != undefined){
//             console.log(x+y+z)
//         } 
//         else if( x != undefined && y != undefined){
//             console.log(x+y)
//         }
//         else if(x != undefined){
//             console.log(x)
//         }
//     }

// }

// let a = new Addition()
// a.additionA(1,2,3)
// a.additionA(1,2)
// a.additionA(1)

// // different class , same method same signatur (always inheritance)

// class Mother {
//     constructor(fn,ln){
//         this.firstName = fn
//         this.lastName = ln
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Son  extends Mother {

//     constructor(fn,ln,sname){
//         super(fn,ln)
//         this.sname = sname
//     }

//     displayName(){
//         console.log(this.sname + this.lastName)
//     }

// }
// let sagar = new Son("ram","sham","dham")
// sagar.displayName()



//                                           day 11



// // polymorphism
// // Overloading     Overriding 
// // method Overloading -- same class , same  method name , same signature
// // method overriding  -- differnt class , same  same method name  , different signature

// // class  Cal {
// //     static Subtraction(x,y,z){
// //         if(x != undefined  && y != undefined && z != undefined){
// //             console.log(x-y-z)
// //         }
// //         else if(x !=  undefined && y != undefined){
// //             console.log(x-y)
// //         }
// //         else  {
// //             console.log('please enter valid inpur')
// //         }
// //     }
// // }

// // Cal.Subtraction(10,4,2)
// // Cal.Subtraction(10,4)
// // Cal.Subtraction(10)

c
// class SBI extends WorlBank {

//     loan(x){
//         console.log('loan from SBI')
//         return x + 1 
//     }
//     save(x){
//         console.log('save from SBI') 
//         return x  + 1
//     }
    
// }

// class PNB extends 
//  {

//     // loan(x){
//     //     console.log('loan from PNB')
//     //     return x + 1  + 1
//     // }
//     // save(x){
//     //     console.log('save from PNB') 
//     //     return x  + 1 + 1
//     // }
    
// }


// let nagpur =  new SBI()
// console.log(nagpur.loan(1))
// console.log(nagpur.save(3))

// let wardh = new PNB()
// console.log(wardh.loan(1))
// console.log(wardh.save(3))

class Bank {
    constructor(firstName, lastName , bal){
        this.firstName = firstName
        this.lastName = lastName
        this.bal = bal
        this.transaction = []
    }
    withdrawl(amt){
        if(this.bal > amt){
            this.bal = this.bal - amt
            this.transaction.push(-amt)
            return this.bal
        }
        else {
            console.log('Insufficient')
        }
    }
    deposit(amt){
        this.bal = this.bal + amt
        this.transaction.push(amt)
        return this.bal

    }
    lastFiveTransactions(){
        return this.transaction.slice(-5)
    }
    //let a = [11,22,33,44,55,66,77]
    //a.slice(-5)
}
let  chinmay = new Bank("chinmay","deshpande",1000000)
console.log(chinmay.bal)
// chinmay.withdrawl(200000000)
chinmay.withdrawl(20)
chinmay.withdrawl(200)
chinmay.withdrawl(30)
chinmay.withdrawl(40)
chinmay.deposit(40)
chinmay.deposit(400)
chinmay.deposit(4000)
chinmay.deposit(400000)
chinmay.deposit(4000000)

console.log(chinmay.lastFiveTransactions())
console.log(chinmay.transaction)

//sum of all element of array







