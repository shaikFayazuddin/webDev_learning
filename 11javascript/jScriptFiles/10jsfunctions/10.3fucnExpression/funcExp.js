// fucntion expression
// another way ofdefining function
// storing a fucntion in variable

function additiion(x, y) {
    return x + y;
}
// 
const add = function (x, y) {
    return x + y;
}
console.log(add(9654654, 55465564))


// Higher order functions
console.log("Higher order functions")
console.log("Accepting other functions as arguments")
// 1. Accepting other functions as arguments
function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (i = 0; i < 10; i++){
        f()
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 15) + 1
    console.log(roll)
}

console.log("Twice")
callTwice(rollDie) //passing a function as argument
console.log('ten times')
callTenTimes(rollDie)

// 2. returning a fucntion
console.log("Returning a fucntion")

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("The number is less than 0.5")
        }
    } else {
        return function () {
            alert("Greater  than 0.5")
            console.log("The number is greater than 0.5")
        }
    }
}
const output = makeMysteryFunc()
output()

// another fucntion as example
console.log("Another example")
console.log("Factory function")

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}
const isKids = makeBetweenFunc(0,18)
const isAdult = makeBetweenFunc(19,30)
const isSenior = makeBetweenFunc(50,68)
console.log(isKids)
console.log(isKids(5))
console.log(isKids(95))
console.log(isAdult(26))
console.log(isSenior(5))