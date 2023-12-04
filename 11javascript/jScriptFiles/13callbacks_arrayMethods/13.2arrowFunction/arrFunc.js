// arrow fucntions
console.log("Arrow Fucntions")

const add = (x, y) => {
    return x + y;
}
console.log(add(85,12))

const square = (x) => { //or---const square = x----also works
    return x * x;
}
console.log(square(85))

const rollDie = () => {
    return Math.floor(Math.random()*6) + 1
}
console.log(rollDie())
console.log(rollDie())
console.log(rollDie())

// MAKING ARROW FUNCTIONS MORE COMPACT
const isEven = function (num) { //regular fucntion expression
    return num % 2 === 0;
}
console.log(isEven(8))

const isEvenN = (num) => { //arrow fucntion with parents around param
    return num % 2 === 0;
}
console.log(isEvenN(18))

const isEvenNu = num => { //no parents around param
    return num % 2 === 0;
}
console.log(isEvenNu(80))

const isEvenNum = num => ( //implicit function
    num % 2 === 0
)
console.log(isEvenNum(85))

const isEvenNumb = num => num % 2 === 0 //one-liner implicit function
console.log(isEvenNumb(68))

// another implicit example
const die = () => (
    Math.floor(Math.random() * 6) + 1
)
console.log(die())

// arrow function and this
const person = {
    firstName : 'firstname',
    lastName: 'lastname',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(person.fullName()) //thsi will print the desired result
// when arrow fucntion is used it throws error
const personName = {
    firstName : 'firstname',
    lastName: 'lastname',
    fullName: () => {
        console.log(this)
        return `${this.firstName} ${this.lastName}` // this refers to window object
    } // the keyword this will refer to the scope that it was created in
}
console.log(personName.fullName())

// need to refer again
// didn't understand