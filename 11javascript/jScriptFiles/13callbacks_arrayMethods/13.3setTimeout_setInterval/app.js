// setTimeout 
console.log("HELLO!!!!.....")

setTimeout(() => {
    console.log("...GoodBye")
}, 3000) //function will be called after 3000 ms 

console.log("are you still there, I will wait for 3 seconds......")
//meanwhile the above line will be printed


// setInterval
// will call the function after x amount of time
// setInterval(() => {
//     console.log(Math.random())
// }, 2000)
// now how to stop the above function
const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

// clearInterval(id)