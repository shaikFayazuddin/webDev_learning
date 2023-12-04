// for loops
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("Printing even numbers")
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}
console.log("end of even numbers")
for (let i = 100; i >=0; i -= 10) {
    console.log(i);
}

let animals = ['anteater', 'buffalo', 'cat', 'dog', 'elephanht']
for (let i = 0; i < animals.length; i++){
    console.log(i, animals[i])
}
for (let i = animals.length - 1; i >= 0; i--){
    console.log(animals[i].toUpperCase())
}

// nested loops
for (let i = 1; i <= 10; i++){
    console.log(`i is: ${i}`)
    for (let j = 1; j < 4; j++){
        console.log(`   j is ${j}`)
    }
}

const letters = [
    ['a', 'b', 'c','zyx'],
    ['d', 'e', 'f'],
    ['g', 'h', 'k']
]
for (let i = 0; i < letters.length; i++){
    console.log(`ROW #${i+1}`)
    for (let j = 0; j < letters[i].length; j++)
    {
        console.log(`   ${letters[i][j]}`)
        }
}

// while loops
let count = 0;
while (count < 10) {
    count++;
    console.log(count)
}

// ######################################
// const secret = 'Hello'
// let wish = prompt("Say Hello......")
// while (wish !== secret) {
//     wish = prompt("Say Hello......")
// }
// console.log("Hello from the other side!!!!")


// ########################
// let input = prompt("Hey, say something")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === 'stop') {
//         break;
//     }
// }
// console.log("OK! You win")


// ##########################################
// in this game you have to guess a number and number will be less than the
// maximum number which you enter at the begininhg
// let maximum = parseInt(prompt("Enter the maximum number under which you would like to guess a number!!!"))
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!!!"))
// }

// const targetNum = Math.floor(Math.random() * maximum + 1);
// console.log(targetNum)
// let guess = parseInt(prompt("Enter the first guess"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q')
//         break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess, Enter 'q'  to quit.")
//     } else {
//         guess = prompt("Too low! Enter a new guess.Enter 'q'  to quit")
//     }
// }
// if (guess === 'q') {
//     console.log("Ok!! You quit")
// } else {
//     console.log(`You got it! It took ${attempts} guesses`)
// }


// for loop with of
const subreddits = ['cringe', 'books', 'chickens', 'funny','pics']
for (let sub of subreddits) {
    console.log(sub)
}
// ########
const items = [
    ['pin', 'oil', 'cream'],
    ['pant', 'shirt', 'vest'],
    ['shoe','socks']
]
for (let category of items) {
    for (let item of category) {
        console.log(item);
    }
}
// ###########
for (let char of "I do not care") {
    console.log(char)
}

// ###############################################
// Iterating over objects
const testScores = {
    ali: 85,
    dam: 23,
    kim: 91,
}
for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`)
}
// special method to key and values 
// will return array of keys
console.log(Object.keys(testScores))
// will return array of values
console.log(Object.values(testScores))
console.log(Object.entries(testScores))

for (let score of Object.values(testScores)) {
    console.log(score)
}

let total = 0
let scores = Object.values(testScores)
for (let score of scores) {
    total += score;
}
console.log(total/scores.length)
