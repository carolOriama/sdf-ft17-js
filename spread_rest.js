// rest => pack into a single array
// spread => unpack into individual elements

function addition(...numbers){
// console.log(numbers)
return numbers.reduce((prev, number) =>{
    return prev + number
}
)
}
// console.log(addition(1, 2, 3, 4))
// console.log(addition(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// spread

let students = ["Alvin", "Kevin"]

let new_students = ["Stephanie", "abdi", ...students, "Osman", "Beatrice"]

// console.log(new_students)

let fruits = ["Lemon", "Orange", "Kiwi"] // original array
// push =>end of an Array
// shift => at the begining
// fruits.push("Guava")
// fruits.unshift("Watermelon")

// spread => a copy of the original array non-destructively(...)
// ...fruits => lemon, Orange, Kiwi
let new_fruit_arr = ["Watermelon", "Guava",...fruits, "Babana", "Apple"]

// console.log(fruits)
// console.log(new_fruit_arr)

let student = {
    name : "Naim",
    age: 20
}

// student.gender = "Male"

let new_student_obj = {height: 6, ...student, role: "student"}

console.log(student)
console.log(new_student_obj)