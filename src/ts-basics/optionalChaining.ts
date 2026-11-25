type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0)
// Optional property access operator (?.) is used to check if the customer object is not null or undefined before accessing the birthday property. If customer is null or undefined, it will return undefined instead of throwing an error.
console.log(customer?.birthday?.getFullYear())


// Optional element access operator (?.) is used to check if the customer object is not null or undefined before accessing the birthday property. If customer is null or undefined, it will return undefined instead of throwing an error.
// customers?.[0] is used to check if the customers array is not null or undefined before accessing the first element. If customers is null or undefined, it will return undefined instead of throwing an error.