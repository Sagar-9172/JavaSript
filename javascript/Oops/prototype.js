
function subject(sb,sn){
this.sub1=sb
this.sub2=sn
this.sagar=function(){
    console.log(this.sub1+" "+sub2)
}
}

let ss=new subject("econonmics","polity")
console.log(ss)

// .............................................................

function friuts(nm,cl){
this.name=nm
this.color=cl
}

let veg=new friuts("apple","red")
console.log(veg)

// property
friuts.prototype.test="sweet"

// method
friuts.prototype.varity=function(){
console.log(this.name+this.color)
}


console.log(veg.__proto__===friuts.prototype)//true



