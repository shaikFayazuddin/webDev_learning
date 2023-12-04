// this is to catch errors and preventing from breaking down the code
// generating error deliberately


// hello.toUpperCase() // will throw error as hello is not defined

try {
    hello.toUpperCase();
} catch {
    console.log("Error!!!!")
}


// another example
function yell(msg) {
    console.log(msg.toUpperCase().repeat(3))
}
yell('Rei')
// yell(123) // this will give typeerror, to avoid this
// let us use try and catch method
function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3))
    } catch(e) {
        console.log("Wrong value entered")
    }
}
yell('Oy')
yell(5)
