let a = 15 // type inference, a is assigned to be a number

let x: number // explicit type annotation, x is explicitly declared to be a number
let y: string // explicit type annotation, y is explicitly declared to be a string
let z: boolean // explicit type annotation, z is explicitly declared to be a boolean
let d: Date // explicit type annotation, d is explicitly declared to be a Date object
let b: string[] // explicit type annotation, b is explicitly declared to be an array of strings
let p : any // explicit type annotation, p is explicitly declared to be of any type
const she= "Alice" // created a type that she that can not be cast to any othertype .
//  If it isArray vaule in the array can chnage. no reassigning the type 

y = "Hi"
x = 1234
z = false
// Use a string or separate numeric arguments to avoid accidental octal/numeric division
d = new Date("2006-06-06") // explicit type annotation, d is explicitly declared to be a Date object
let c = 123 as any // casting string[] to any type 