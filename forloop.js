// for loop syntax

// for(initiatalState/start; condition; increment/decrement/step){
//     block of code
// }

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = 5; i < numbers.length; i++){
    // console.log(numbers[i])

}   //length => 10

// for --- of

for(let number of numbers){
    console.log(number ** 2)
}