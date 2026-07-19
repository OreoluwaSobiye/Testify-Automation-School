//1. Calculate the sum of numbers in an array.
const sumarray = [2,3,5,6,7,8]

let sum = 0
for (let i = 0; i<sumarray.length; i = i + 1 ){
    sum = sum + sumarray[i]
}

console.log(sum)

//2. Create a length converter function
function converter(cm){
    const meter = 1/100*cm
    return meter;
}

console.log(converter(200))

//Print all even number from 1-100
for (let even = 0; even<=100; even = even + 1 ){
    if(even%2 === 0){
        console.log(even)
    }

}

//Print a table containing the multiplications table
function table(){
    let a= 2
    let b= 0
    for(;b<13; b = b+1){
        let multiplication = a*b;
        console.log(`${a} x ${b} = ${multiplication}`)}
}
table()

// Create a function that reverses an array.
function reversearray(){
    const array = [2,9,"Blue", 3, 8, 'White', 'Orange']
    const reverse = []
    for (let x = array.length-1; x >0 ; x = x - 1 ){
        reverse.push(array[x])
    }
    return reverse
}

console.log(reversearray()) 

//Sort an array of numbers in descending order.
const fruits = ['apple', 'guava', 'pineapple', 'blueberries', 'strawberries', 'watermelon']
console.log(fruits.sort())

// Return a Boolean if a number is divisible by 10.
let y = 20
if(y%10===0){
    console.log(true)}
else{
    console.log(false)
}

//Return the number of vowels in a string.
function count(u){
    let vowelcount = 0
    const vowels = ['a','e','i','o','u']
    for(let i of u ){
        if (vowels.includes(i)){
            vowelcount ++
        }
    }
    return vowelcount
}
console.log(count('Strawberries'))

//Create a function that filters out negative numbers.
function filter(){
    const num = [1,8,9,-9,-4,-5,8,4,-2]
    const result = []
    for(i=0 ; i<num.length; i = i+1){
        if(num[i]<0){
            result.push(num[i])
        }
    }
    return result
}
console.log(filter())