let student = {
    first_name : "Victor",
    middle_name : "Nelson",
    age: 20,
    gender: "Male",
    occupation: "Student",
    address: {
        zipCode: "00100",
        city: "Nairobi"
    },
    friends: ["Alex", "Alvin", "Caroline"],
}

// dot notation
console.log(student.occupation)
console.log(student.friends[1])

// bracket notation
console.log(student["address"]["zipCode"])
console.log(student["friends"][2])

// object methods
// object keys
console.log(Object.keys(student))

// object values

console.log(Object.values(student))

// adding new key value pair

student.height = 6

console.log(student)

// object iteration
// for ---- of
let student_values = []

for(let key in student){
    student_values.push(student[key])
}

console.log(student_values)

// console.log(Object.entries(student))
