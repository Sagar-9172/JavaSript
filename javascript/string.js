//..............................................STRING.................................................//       


//                                               program 1

let aa = "sagar"
//       012345
console.log(aa[0]) // 's'
console.log(aa[1]) // 'a'
for (let i = 0; i < a.length; i++) {
    //console.log(i)
    console.log(aa[i])
}

// //                                             program2 

let soup = "santur"
let rev = ""
//console.log(city[0])
for (let i = 0; i < soup.length; i++) {
    // console.log(i)
    //console.log(city[i])
    rev = soup[i] + rev
}
console.log(rev)

revrs2 = ""
for (let i = soup.length - 1; i >= 0; i--) {
    //console.log(i)
    console.log(soup[i])
    revrs2 = revrs2 + soup[i]

}
console.log(revrs2)

//                                                      program 3
// vowels from from "string"

let vowels = 'sagarnanavare'
let star = 0
//'aueio'
for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] == 'a' || vowels[i] == 'e' || vowels[i] == 'i' || vowels[i] == 'o' || vowels[i] == 'u') {
        star = star + 1
    }
}
console.log(star)

//  //Strings methods ===>

//1 toUppercase()
//2 tolowercase()
//3 StartsWith()
//4 endsWith()
//5 slice()
//6 substring()
//7 substr()
//8 trim()
//9 trimStart()
//10 trimEnd()
//11 indexOf()
//12 includes()
//13 replace()
//14 ReplaceAll()
//15 charat()
//16 charCodeAt()
//17 split()
//18 concat()
//19 padStart()
//20 padEnd()
// =======================================

//                                               1. toUppercase()

// Action = all characters in string make in uppercase
// Return = New upper case string

let str1 = "sachin"
console.log(str1.toUpperCase())
console.log(str1)

//-------------------
//                                                2. tolowercase()

// Action = all characters in string make in lowercase
// Return = New lower case string

let str2 = "SAGAR"
console.log(str2.toLowerCase())
console.log(str2)


//                                                 3. startsWith(arug) // str / subStr
// arug - sub-string
// Action = Checking start with given Chara/Substring
// Return = True/False (Boolean)

let district = "Solapur"
console.log(district.startsWith("K"))  // false
console.log(district.startsWith("s"))  // false
console.log(district.startsWith("S"))  // true
console.log(district.startsWith("Sol")) // true

//------------------------------------
//                                            4. endsWith(arug) // str / subStr
// arug - sub-string
// Action = Checking End with given Chara/Substring
// Return = True/False (Boolean)

let city3 = "Nagpur"
console.log(city3.endsWith("r"))
console.log(city3.endsWith("ur"))
//----------------------------------------------

//                                           5. slice(startPoint, EndPoint)  // index no.
// Works with both +ve & -ve indexing
// endPoint not including
// Action = Cut the string by requirement
// Return = Sliced sub-string

let str = " Hi Ganesh "
// "  H i   G a n e s h  "
//  0 1 2 3 4 5 6 7 8 9 10     +ve indexing
// -11                  -1     -ve indexing

console.log(str.slice(1, 3))  // Hi
console.log(str.slice(4, 10))  // "Ganesh"
console.log(str.slice(4))  // "Ganesh "

// -ve indexing
console.log(str.slice(-10, -8))  // Hi
console.log(str.slice())  // " Hi Ganesh "
console.log(str.slice(-7, -1))  // "Ganesh"
console.log((str.slice(-7, -1)).length)  // 6
console.log(str.slice(-7))  // "Ganesh "
console.log((str.slice(-7)).length)  // 7

//----------------------------------------------------
//                                           6. substring(startPoint, EndPoint)  // index no.
// Works with only +ve indexing ( below the zero consider only zero)
// we cant pass -ve index
// endPoint not including
// Action = Cut the string by requirement
// Return = Sliced sub-string

let str5 = " Hi Ganesh "
console.log(str5.substring(-7))  //  " Hi Ganesh "
console.log(str5.substring(1, 3))  // Hi
console.log(str5.substring(4, 10))  // "Ganesh"
console.log(str5.substring(4))  // "Ganesh "

//-----------------------------
//                                             7. substr(startPoint, length)

// Action = Cut the string by requirement
// Return = Sliced sub-string

let str6 = " Hi Ganesh "
console.log(str6.substr(4, 6)) // Ganesh


console.log("Name".substr(0, 2)) // 'Na'
console.log("Name".substr(0, 4)) // 'Name'
console.log("Name".substr(-4, 4)) // 'Name'  --> works -ve indexing
console.log("Name".substr(-2, 4)) // 'me'
console.log("Name".substr(-2)) // 'me'
console.log("Name".substr(0)) // 'Name'  --> Conside upto last index no

//                                                   8.trim() 
// method removes space from both sides of a string.
// method does not change the original string.
let mobile = " nokiya "
let s6 = mobile.trim()
console.log(s6)

//                                                    9.trimstart()
//  method removes space from the beginning of a string.
//  method does not change the original string.
//  works like trim(), but removes space only from the start of a string.
let mobile2 = " samsung "
let s7 = mobile2.trimStart()
console.log(s7)
//                                                     10.trimEnd()
// method removes space from the end of a string.
// method does not change the original string.
// method works like trim(), but removes space only from the end of a string.
let mobile3 = "iphone "
let s8 = mobile3.trimEnd()
console.log(s8)
//                                               11.indexOf()
// arug1 = chara, substring
// arug2 = Start point
// Action = Finds the index number (first occurance)
// Return = index number (number)
let subject = 'economics'
let s2 = subject.indexOf('o')
let s3 = subject.indexOf('c')
console.log(s2)
console.log(s3)


//                                                12. includes()
// arug - Chara or subStr
// Action = char or substring finding/checking inside the string
// Return = true/false (Boolean)

let fruit = "Apple"
let s1 = fruit.includes('A')
console.log(s1)

//                                     13. replace(baseStr, replacingStr)
// arug1 - baseStr(Chara or substring)
// arug2 - replacingStr
// Action  = replace Existing char with new char (first occurance)
// return = New string

let lang1 = "javaScript"
console.log(lang1.replace("a","z"))  // jzvaScript
console.log(lang1)  // "javaScript"

//                                     14. ReplaceAll(baseStr, replacingStr)

// arug1 - baseStr(Chara or substring)
// arug2 - replacingStr
// Action  = replace All Existing char with new char (All occurance)
// return = New string

let lang = "javaScraiptaaaaa"
console.log(lang.replaceAll("a","z"))  // jzvzScrziptzzzzz
console.log(lang)  // javaScraiptaaaaa

let eg = "Hi Sagar"
console.log(eg.replace("Sagar", "Ganesh"))  // Hi Ganesh


//                                                   15.charAt()
// arug1 - index no
// Action = Gives the char at given index
// Return =  index no. value (String)

let car = "swift"
let s4 = car.charAt(3)
console.log(s4)

let bb = "String"
console.log(bb.charAt(0))  // S
console.log(bb.charAt(3)) // i

console.log(bb.charAt(6))  // empty string
console.log(typeof(bb.charAt(6))) // string

// -ve indexing
console.log(bb.charAt(-3)) //  empty string
console.log(typeof(bb.charAt(-3))) // string




//                                                   16. charCodeAt(arug1)
// arug1 - index no
// Action = gives the char at index
// Return = Asccii Value  (Number)

let c = "@String"
console.log(c.charCodeAt(1)) // t ---> 116    
console.log(c.charCodeAt(0))  // @ ---> 64


//                                                     17. split(arug1)
// Arug1 - String  (optional)
//Action = string split in passed parameter
//return = Array

let name = "sagar-nanavare"
let s5 = name.split('-')
console.log(s5)

let d = "@Strin|g"
console.log(d.split()) // Array  --> [ '@Strin|g' ]
console.log(d.split(""))  // ['@', 'S', 't','r', 'i', 'n','|', 'g']
console.log(d.split(" "))  // [ '@Strin|g' ]

g = "Hi @Strin|g"
console.log(g.split(" ")) // [ 'Hi', '@Strin|g' ]
console.log(g.split("i"))  //  [ 'H', ' @Str', 'n|g' ]
console.log(g.split("|"))  //  [ 'Hi @Strin', 'g' ]
console.log(g.split("n|")) //  [ 'Hi @Stri', 'g' ]


//                                                 18. concat(arug1, arug2)
// arug1 - joiner
// arug2 - join
//Action = joins two or more strings:
//return = String

let x = "hi"
let y = "Good"
let w = "Good"
console.log(x.concat(" ", y))  // hi Good
console.log(x + " " + y) // hi Good

console.log(x.concat("", y)) //  hiGood
console.log(x.concat(20, y)) // hi20Good

console.log(x.concat(20, y, w)) // hi20GoodGood

//                                                 19. padStart(arug1, arug2)
// arug1 = length
// arug2 = value (for padding)
//Action = Before the base string Repeating the value upto (length-1)
//return = String

let e = "Hi"
console.log(e.padStart(5, "z"))  // "zzzHi"
console.log(e.padStart(10, "zx")) // zxzxzxzxHi

console.log(e.padStart(9, "zx"))  // zxzxzxzHi

console.log(e.padStart(4, 2)) // "22Hi"

// Applying on number
let r = 10
let t = b.toString()
console.log(t, typeof(t))  // 10, String
console.log(t.padStart(4, 2)) // "2210"

//                                                   20. padEnd(arug1, arug2)
// arug1 = length
// arug2 = value (for padding)
//Action = After the base string Repeating the value upto (length-1)
//return = String

let a = "Hi"
console.log(a.padEnd(5, "z"))  // "Hizzz"
console.log(a.padEnd(10, "zx")) // Hizxzxzxzx

console.log(a.padEnd(9, "zx"))  // Hizxzxzxz

console.log(a.padEnd(4, 2)) // "Hi22"

// Applying on number
let b = 10
let z = b.toString()
console.log(z, typeof(z))  // 10, String
console.log(z.padEnd(4, 2)) // "1022"