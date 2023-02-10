
// let info = {
//     "page": 1,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 1,
//             "email": "george.bluth@reqres.in",
//             "first_name": "George",
//             "last_name": "Bluth",
//             "avatar": "https://reqres.in/img/faces/1-image.jpg"
//         },
//         {
//             "id": 2,
//             "email": "janet.weaver@reqres.in",
//             "first_name": "Janet",
//             "last_name": "Weaver",
//             "avatar": "https://reqres.in/img/faces/2-image.jpg"
//         },
//         {
//             "id": 3,
//             "email": "emma.wong@reqres.in",
//             "first_name": "Emma",
//             "last_name": "Wong",
//             "avatar": "https://reqres.in/img/faces/3-image.jpg"
//         },
//         {
//             "id": 4,
//             "email": "eve.holt@reqres.in",
//             "first_name": "Eve",
//             "last_name": "Holt",
//             "avatar": "https://reqres.in/img/faces/4-image.jpg"
//         },
//         {
//             "id": 5,
//             "email": "charles.morris@reqres.in",
//             "first_name": "Charles",
//             "last_name": "Morris",
//             "avatar": "https://reqres.in/img/faces/5-image.jpg"
//         },
//         {
//             "id": 6,
//             "email": "tracey.ramos@reqres.in",
//             "first_name": "Tracey",
//             "last_name": "Ramos",
//             "avatar": "https://reqres.in/img/faces/6-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }


// console.log(info.data)
// info.data.forEach(function(el){
//     //console.log(el)
//     document.write(`<h1>${el.id}</h1>`)
//     document.write(`<h2>${el.first_name}</h2>`)
//     document.write(`<h2>${el.last_name}</h2>`)
//     document.write(`<p>${el.email}</p>`)
//     document.write(`<img src = ${el.avatar}>`)
// })


// program 2


function getUsers() {
    fetch('https://reqres.in/api/users?page=1')
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            //console.log(res.data)
            res.data.forEach(el => {
                document.write(`<h1>${el.id}</h1>`)
                document.write(`<h2>${el.first_name}</h2>`)
                document.write(`<h2>${el.last_name}</h2>`)
                document.write(`<p>${el.email}</p>`)
                document.write(`<img src = ${el.avatar}>`)
            });
        })
}
getUsers()


//  Database    Severside(API)        <-------  Client
// --------> json --- js object ---- html element