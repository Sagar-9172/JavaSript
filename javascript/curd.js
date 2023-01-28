let subject={
    sub1:"economics",
    sub2:"polity",
    sub3:"scince",
    sub4:"science"
}

// creat
subject.sub5="social science"
console.log(subject)
subject["sub6"]="parliment"
console.log(subject)

// update
subject.sub1="maths"
console.log(subject)
subject["sub2"]="HRD"
console.log(subject)

// retrive
console.log(subject.sub1)
console.log(subject["sub2"])

// delete
delete subject.sub1
console.log(subject)
delete subject["sub2"]
console.log(subject)