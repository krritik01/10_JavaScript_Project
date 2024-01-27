const myNumber =[1,2,3,4,5,6,7,8,9,10]

const newNums = myNumber.map((num)=> num + 10)
console.log(newNums)
// const newNumss = myNumber.map((num)=> { //If we use scope then we this 
//    return num + 10
// })
// console.log(newNumss)

//Chaining Method
const Number =[1,2,3,4,5,6,7,8,9,10]
const newNumber= myNumber.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
console.log(newNumber)