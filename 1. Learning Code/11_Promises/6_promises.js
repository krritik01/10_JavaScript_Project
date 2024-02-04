//Another one
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data)
//     }
//     catch(error){
//         console.log("E:", error)
//     } 
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
        return response.json()
    })
.then((responsedata)=>{
    console.log(responsedata)
})
.catch((error)=>{
    console.log(error)
})
