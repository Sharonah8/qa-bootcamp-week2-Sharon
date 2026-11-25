// a list of related constants 
//const small = 1
//const medium = 2
//const large = 3

//PascalCase 
// TS will assign from 0,1,2,... but you can explicitly assign values to each enum member
enum TshirtSize{ Small = 1, Medium, Large}
let myTshirtSize: TshirtSize = TshirtSize.Medium
console.log(myTshirtSize)
