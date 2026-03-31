let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map=> create a copy of the original Array
// find => returns the first element that meets the condition
// filter =>  returns all the element that meets the condition
// reduce => returns a single vaersion of the whole array

// arra_name.method(function to be executed on each array element)

let squared_array = numbers.map(function(num){
    return num ** 2
})

// console.log(squared_array)

let even_numbers = numbers.filter(function(number){
     
    return number % 2  == 0
})

// console.log(even_number)

let even_number = numbers.find(function(x){
    return x % 2 == 0
})

// console.log(even_number)

const array_sum = numbers.reduce(function(num, acc){
    total = acc + num
    return total
}, 0)

console.log(array_sum)


// hoisting
// closure
// reduce array method in js
