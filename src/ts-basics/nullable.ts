function greet(name: string) {
    if (name)
    console.log(name.toUpperCase())
}

greet(null) // this will throw an error because null is not a string and we can't assign a method (.toUpperCase) to a null value