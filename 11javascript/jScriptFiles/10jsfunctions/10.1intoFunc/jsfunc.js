// function
// define

// weird part of js is function can be called before defining it
sing()
function sing() {
    console.log("Do");
    console.log("you");
    console.log("like");
}
sing()

// fuctions with arguments
function greet(person) {
    console.log(`Hi ${person}`)
}
greet('ali')

// 
function repeat(str, num) {
    let result = ''
    for (let i = 0; i < num; i++){
        result += str;
    }
    console.log(result)
} 

repeat('hey ', 5)
repeat('$ ', 5)

// multiple args 
function isSnakeEyes(num1, num2){
    if(num1 === 1 && num2 === 1){
        console.log("Snake Eyes !")
    }
    else {
        console.log("Not Snake Eyes")
    }
}
isSnakeEyes(1, 1)

// return
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== "number") {
        return false;
    }
    let sum = x + y;
    return sum;
    console.log("This will not be printed")
}
let a = add(88, 56)
console.log(a)
let b = add(a,100)
console.log(b)

// ########## lase element exercise
function lastElement(array) {
    let lenghtOfArray = array.length
    if(lenghtOfArray>=1){
        return array[lenghtOfArray - 1]
    }

}
lastElement([5, 6, 8])

// ###
function isShortsWeather(temp) {
    if (temp >= 75) {
        return true
    }
    return false
}

// ##############
// capitalize exercise
function capitalize(string){
    let firstLetter = string[0]
    let capitalLetter = firstLetter.toUpperCase()
    let slicedString = string.replace(firstLetter, '')
    let newString = capitalLetter + slicedString
    return newString
}

// sum array exercise
function sumArray(array) {
    let total = 0
    for (let i = 0; i < array.length; i++){
        total += parseInt(array[i])
    }
    return total
}

// days of the week exercise
const days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
}
function returnDay(number) {
    if (number >= 1 && number <= 7) {
        return days[number]
    }
    return null
}

