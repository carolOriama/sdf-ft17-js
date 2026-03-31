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

console.log(new_students)