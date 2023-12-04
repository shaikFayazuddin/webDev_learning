// ############### Default params#########################################################
console.log('Default params')
function rollDie(numSides) {
    return Math.floor(Math.random() * numSides) + 1
}

console.log(rollDie(6))
console.log(rollDie(20))
console.log(rollDie(63))
console.log(rollDie(26))
console.log(rollDie()) // to rectify this we use default parameters

//old way of writing
function rollDie(numSides) {
    if (numSides === undefined) {
        numSides = 6
    }
    return Math.floor(Math.random() * numSides) + 1
}
console.log(rollDie())

// new way of writing
function rollDie(numSides = 8) {
    return Math.floor(Math.random() * numSides) + 1
}
console.log(rollDie())
console.log(rollDie(20))

//another example
function greet(msg="hi", person) {
    console.log(`${msg}, ${person}`)
}
greet('luna') //this will think that msg = luna and will leave person undefined
// its always advised to write defined values later

function wishes(person, wish = "Happy Birthday") {
    console.log(`${wish}, ${person}`)
}
wishes('luna')
wishes('roy', 'happy anniversary')

// #############################################
// #### ####################### SPREAD ######################
// spread for function calls - Expands an iterable (array, string etc) into a list of arguments
const highest = Math.max(13, 8, 9, 555, 6987, 414796, 7146, 2, 0)
const lowest =  Math.min(13, 8, 9, 555, 6987, 414796, 7146, 2, 0)
console.log(highest)
console.log(lowest)

const nums = [55, 79874, 3, 598, 48, 47948, 14541, 814, 0, 4, 65]
console.log(Math.max(nums)) // will print Nan as JS dont know what to do
// to get expected result we use spread
console.log(Math.max(...nums)) // spreading nums into the function
console.log(...nums) 
console.log(...'hello')

// spread in array literals - create a new array using an existing array.
// Spreads the elements from one array into a new array
const boys = ['ali','bilal','salman']
const girls = ['ayesha', 'fathima', 'zainab']

const students = [...boys, ...girls, 'Umar']
console.log(students)

// spread in Object literals--
// copies properties from one object into another object literal
const feline = {
    legs: 4,
    family : "Feliade"
}
const canine = {
    isFurry: true,
    family: "Caninae"
}
const catDog = {...feline, ...canine, legs: 3, pet: true }
console.log(catDog)

// when array is passed#############
const marks = [2, 4, 6, 8]
const subject = {...marks}
console.log(subject)
console.log(subject[0])
console.log({ ..."hello" })

// ############################
// ## The arguments object
function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total   
}
console.log(sumAll(8, 8, 4, 8))

// ###
function findSum() {
    return arguments.reduce((total, el) => total + el)
}
// console.log(findSum(8, 8, 4, 8)) //will throw error as arguements passed is not an actual array



//##########################  REST PARAMS #######################
// collect all remaining arguments into an actual array

function sum(...numbs) { //all the values passed in the fucntion sum wil be stored in nums array
    console.log(numbs) // can be user only inside the fucntion
    let total = 0;
    for (let n of numbs) total += n
    return total
}
console.log(sum(98, 80, 4, 8))

// now that nums is real array we can perform array methods on it
function add(...numbers) {
    return numbers.reduce((total, el) => total + el)
}
console.log(add(8, 8, 4, 8))

// 
function raceResults(first, second, third, ...everyoneElse){
    console.log(`Gold Medal goes to ${first}`)
    console.log(`Silver Medal goes to ${second}`)
    console.log(`Bronze Medal goes to ${third}`)
    console.log(`and Thanks to everyone else:  ${everyoneElse}`)
    console.log(everyoneElse)
}
console.log(raceResults('Milkha', 'Bolt', 'Owens', ['Fayaz', 'Ismail', 'Asif']))

// #####################################
//  DESTRUCTURING
// Array Destructuring
const athletes = ['Eluid Kipchoge', 'Feylisa Lelisa', 'Galen Rupp','Fayaz','Farah']

const [gold, silver, Bronze, ...everyoneElse] = athletes
console.log(gold)
console.log(silver)
console.log(Bronze)
console.log(everyoneElse)

// Object Destructuring
const user = {
    email: 'falshdfj@gmail.com',
    password: 'HhhsuidfHOUyh',
    firstName: 'lol',
    lastName: 'rofl',
    state: "liquid",
    dob: 'july'
}

const user_email = user.email // old method to extract values
console.log(user_email)

const {state, lastName, password, email } = user // new method
console.log(state)
console.log(password)
console.log(email)
console.log(user)

// to change variables
const{password: user_password, lastName : Name, dob: birthyear} = user
console.log(user_password)
console.log(Name)
console.log(birthyear)

// assigning new values
const { district = 'Krishna'} = user
console.log(district)
console.log(user)


// PARAM destructuring
const details = {
    standard: 'tenth',
    section: 'vikram',
    strength: 60,
    leader: 'fayaz'
}
function class_leader({standard, section, strength, leader}) {
    return `${leader} is the leader of ${standard} class, ${section} section and its strength is ${strength}`
}
console.log(class_leader(details))




