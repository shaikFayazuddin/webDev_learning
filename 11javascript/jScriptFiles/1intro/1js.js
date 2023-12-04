console.log('Hello from our first JS file!!!')

console.log("Username: User1")
console.log("Password: ")

// password = 'qwerty'
let userPassword = prompt('Enter your password')

// if (userPassword == password) {
//     console.log("The password you entered is correct")
// }
// else {
//     console.log("You entered a wrond password")
// }


if (userPassword.length >= 6) {
    if (userPassword.indexOf('') === -1) {
    console.log("Valid Password")
    }
    else {
        console.log("Password cannot contain spaces")
    }
}
else {
    console.log("Password too short!!! Must be 6+ characters")
}

