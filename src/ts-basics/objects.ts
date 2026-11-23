// using type alias, you define a custom type that can be used to describe the shape of an object. This is useful for creating reusable types and improving code readability.   
type Employee = {
    readonly id: number
    name: string
    retire: (date: Date) => void
}

let employee: Employee = { id: 1, name: 'Sharon', retire: (date: Date) => {
    console.log(date)
}}

console.log(employee.id)
