// Function Scope

let totalEggs = 0;
function collectEggs() {
    totalEggs = 6;
}
console.log(totalEggs)
collectEggs()
console.log(totalEggs)

// 
let bird = "Eagle";
function birdName() {
    let bird = "Parrot";
    // bird is scoped to birdWatch funtion
    console.log(bird);
}
console.log(bird)
birdName()

// Block Scope
for (let i = 0; i < 5; i++){
    let msg = "whY???";
    console.log(msg)
    console.log(i)
}
console.log(msg)  // this will throw error

// using var
for (var i = 0; i < 5; i++){
    var msg = "whY not???";
    console.log(msg)
    console.log(i)
}
console.log(`${msg} out of loop`)
console.log(`${i} out of loop`)

// Block Scope
let radius = 8;
if (radius > 0) {
    const PI = 3.14;
    let circ = 2*PI*radius
}
// PI and circ are scoped to block
console.log(radius)
// console.log(PI) //will give error
// console.log(circ) //same here

// lexical Scope
// an inner function nested inside of some parent funtion has access to the scope 
// or the variables to find in the scope of that outer function
function bankRobbery() {
    const heroes = ['spiderman', 'batman','CA','IM']
    function cryForHelp() {
        function inner(){
            for (let hero of heroes) {
                console.log(`Please help us, ${hero.toUpperCase()}`)
            }
        }
        inner()
    }
    cryForHelp()
}
bankRobbery()