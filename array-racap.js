let numbers = [1, 6, 3, 4, 5, 2, 7, 8, 9, 10]

// map
// arr_name.arra_method(callbaclfn)

let num_square = numbers.map(function(num){
    return num ** 2
})

// console.log(num_square)

// filter
function get_even_nums(num){
    return num % 2 == 0

}

// let even_nums = numbers.filter((x)=> x % 2 !== 0)

let even_nums = numbers.filter(get_even_nums)
// console.log(even_nums)

// find
let even_num = numbers.find(function(x){
    return x % 2 == 0

})

// console.log(even_num)

// reduce

let sum = numbers.reduce(function(total, num){
    return total + num
})

// console.log(sum)

// forEach
numbers.forEach(function(number){
console.log(number * 10)
})
