// forEach method  #############################
console.log("ForEach Method")

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11.12]

// 
function print(element) {
    console.log(element)
}
nums.forEach(print) //instead of this we can do.....

nums.forEach(function (el) {
    console.log(el)
})

console.log("Printing even numbers")
nums.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
    }
})
// ###
console.log("Printing square numbers")
nums.forEach(function (n) {
    console.log(n*n)
})


const movies = [
    {
        title: 'alien',
        score: 90,
    },
    {
        title:'Parasite',
        score:85
    },
    {
        title: "Fayaz",
        score:100
    }
]

movies.forEach(function (movies) {
    console.log(`${movies.title}: ${movies.score}/100`)
})


// ####################################################
// MAP method
console.log('')
console.log("Map Method")
console.log("Cube of natural numbers")

const cubes = nums.map(function (number) {
    return number*number*number
})
console.log(cubes)

// map exercise to print first names from the list
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here
const firstNames = fullNames.map(function(fullNames){
    return fullNames.first
})
console.log(firstNames)



// Filter Method ##################################################
const evenNumbers = nums.filter(n => n % 2 === 0)
const oddNumbers = nums.filter(n => n%2 ==! 0)
console.log(evenNumbers)
console.log(oddNumbers)


// combining both map and filter method
const goodMovies = movies.filter(m => m.score > 80)
const goodTitles = goodMovies.map(m => m.title)
console.log(goodMovies)
console.log(goodTitles)

// or it can also be done in the following method
const bestMovies = movies.filter(m => m.score > 80).map(m => m.title)
console.log(bestMovies)

// exercise practise 
// Write a function called validUserNames that accepts an array of usernames (strings).
//  It should return a new array, containing only the usernames that are less than 10 characters.
function validUserNames(usernames) {
    return usernames.filter(names => names.length < 10)
}
// using arrow fucntion
const validNames = usernames => usernames.filter(name => name.length < 10)
console.log(validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']));
console.log(validNames(['mo', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']));

// EVERY method ###################
const words = ['dog', 'dig', 'log', 'bag', 'wag']

const lenghtOfWord = words.every(word => word.length === 3)
const firstLetter = words.every(word => word[0] === 'd')
const lastLetter = words.every(word => {
    let last_letter = word[word.length - 1];
    return last_letter === 'g'
})

console.log(lenghtOfWord)
console.log(firstLetter)
console.log(lastLetter)

// SOME METHOD #############################
const engWords = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag']

const wordLen = engWords.some(word => {
    return word.length > 4
}) //will return true  if any of  the word have more than 4 letters
console.log(wordLen)


// some/every exercise
function allEvens(evenNumber) {
    return evenNumber.every(number =>  number % 2 ===0)
}
//  shorthand methods
const allEvensNumbers = nums => nums.every(n => n%2 === 0)
console.log(allEvens([5, 8, 9, 6, 8]))
console.log(allEvensNumbers([5, 8, 9, 6, 8]))

// REDUCE METHOD #######################################################
const marks = [95,99,98,96,100,97]
const total = marks.reduce((total, marks) => total + marks)
console.log(total)
// intial value can be passed as well
const sum = marks.reduce((total, marks) => total + marks, 100)
console.log(sum)
// to check the highest mark
const highestMark = marks.reduce((max, marks) => {
    if (marks > max) {
        return marks
    }
    return max
})
console.log(highestMark)