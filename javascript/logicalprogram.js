// Problem = Reverse the only string elements
function mane(str){
// let str = "Hello! Hi, i am 'krishna'."

let strx = str.split(" ")//[ 'vishwajit', 'is', 'my', 'name' ]
console.log(strx)

let x = [ ]

function bb(a){ 
let k =" "
    for(let i = 0; i < a.length; i++){

        k = a[i] + k             // .'anhsirk' ma i ,iH !olleH
        //k =  k + a[i]             // Hello! Hi, i am 'krishna'.   
    } 
    return k            // o/p is undefined when not return
}

for(let i = 0; i < strx.length; i++){
let c=bb(strx[i])
    x.push(c)
}
console.log(x)
let j = x.join(" ")
console.log(j)                    // !olleH  ,iH  i  ma  .'anhsirk'
console.log(typeof(j))            // string

}
let aa=mane("vishwajit is my name")
console.log(aa)

