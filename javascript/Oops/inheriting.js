// program 1
// class student {
//     name="sagar"
//     sirname="nanavare"
//     age=25
//     rno=20

//     displyname(){
//         console.log(this.name+this.age)
//     }

// }

// class teacher extends student{
//     salary=25000
// }

// class professor extends teacher{
// specelization ="maths"
// }

// let ss=new professor()
// console.log(ss)
// ss.displyname()


// ..............................................................................
// program 2

// class student {
//     constructor(fn,ln){
// this.firstname=fn
// this.lastname=ln
//     }
//     displyname(){
//         console.log(this.name+this.ln)
//     }

// }

// class teacher extends student{
//     salary=2500000
// }

// class professor extends teacher{
// specelization ="maths"
// }

// let ss=new professor("sagar","nanavare")
// console.log(ss)
// ss.displyname()


// ################################################################################
// program 3

// class student {
//     constructor(fn,ln){
// this.firstname=fn
// this.lastname=ln
//     }
// displyname(){
//     console.log(this.name+this.ln)
// }

// }

// class teacher extends student{
//     constructor(fn,ln,sl){
//     super(fn,ln)
//     this.salary=sl
// }
// }
// class professor extends teacher{
// specelization ="maths"
// }

// let ss=new professor("sagar","nanavare",25000)
// console.log(ss)
// ss.displyname()


// .................................................................................

//                                  Day 9

// class GrandFather {
//     GfirstName = "Tukaram"
//     GlastName = "nanavare"
//     displayName(){
//         console.log(this. GfirstName+this.GlastName)
//     }
// }
// class Father extends GrandFather{
//     fatherFirstName = "shivaji"
//     displayNameFName(){
//         console.log(this.fatherFirstName + this.lastName)
//     }
// }
// class Son extends Father {
//     SonName = "sagar"
//     displaySonName(){
//         console.log(this.SonName + this.lastName)
//     }
// }
// let sagar=new Son()
// console.log(sagar)


// .........................................................
//                                            Day 10
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
//     additionA(x, y, z) {
//         //console.log(x,y,z)
//         if (x != undefined && y != undefined && z != undefined) {
//             console.log(x + y + z)
//         }
//         else if (x != undefined && y != undefined) {
//             console.log(x + y)
//         }
//         else if (x != undefined) {
//             console.log(x)
//         }
//     }

// }

// let a = new Addition()
// a.additionA(1, 2, 3)
// a.additionA(1, 2)
// a.additionA(1)

// // different class , same method same signatur (always inheritance)

// class Mother {
//     constructor(fn, ln) {
//         this.firstName = fn
//         this.lastName = ln
//     }

//     displayName() {
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Son extends Mother {

//     constructor(fn, ln, sname) {
//         super(fn, ln)
//         this.sname = sname
//     }

//     displayName() {
//         console.log(this.sname + this.lastName)
//     }

// }
// let sagar = new Son("ram", "sham", "dham")
// sagar.displayName()




// ...........................................................................................


//                                           day 11



// polymorphism
// Overloadi     ngOverriding 
// method Overloading -- same class , same  method name , same signature
// method overriding  -- differnt class , same  same method name  , different signature

class cal {
    static Addition(a, b, c) {
        if (a != undefined && b != undefined && c != undefined) {

            console.log(a + b + c)
        }
        else if (a != undefined && b != undefined) {
            console.log(a + b)
        }
        else {
            console.log('please enter valid input')
        }
    }
}



cal.Addition(10,4,2)
cal.Addition(10,4)
cal.Addition(10)


class IMF {
    country = "India"
    loan(a){
        console.log('loan from world Bank')
        return a 
    }
    save(a){
        console.log('save from world Bank') 
        return a 
    }
}


class RBI extends IMF {

    loan(x){
        console.log('loan from SBI')
        return x + 1 
    }
    save(x){
        console.log('save from SBI') 
        return x  + 1
    }
}


class SBI extends WorlBank {

    loan(a){
        console.log('loan from SBI')
        return a + 1 
    }
    save(a){
        console.log('save from SBI') 
        return a  + 1
    }
    
}

let pune =  new SBI()
console.log(pune.loan(1))
console.log(pune.save(3))