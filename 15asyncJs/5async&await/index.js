// async function hello() {
    
// }

// const sing = async () => {
//     throw "OH NO, Problem"
//     return 'la la la la la '
// }

// sing()
//     .then((data) => {
//     console.log('Promise resolved with:', data)
//     })
//     .catch(err => {
//         console.log("OH No, Promise rejected")
//         console.log(err)
//     })

// another example demonstrating async function
const login = async (username, password) => {
    if (!username || !password) throw "Missing Credentials"
    if (password === 'jsisnoteasy') return 'Welcome!!!'
    throw "Invalid Password"
}

// login('kfafdhlh', 'jsisnoteasy')
login('kfafdhlh')
    .then(msg => {
        console.log("Logged In!!")
        console.log(msg)
    })
    .catch(err => {
        console.log("Error!!")
        console.log(err)
    })


// using await Keyword and rebuilding the rainbow code
const timedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve()
        }, delay)
    })
}

// timedColorChange("red", 1000)
//     .then(()=> timedColorChange("orange",1000))
//     .then(()=> timedColorChange("blue",1000))
//     .then(()=> timedColorChange("violet",1000))
//     .then(()=> timedColorChange("indigo",1000))
//     .then(()=> timedColorChange("green",1000))
//     .then(()=> timedColorChange("orange",1000))
//     .then(() => timedColorChange("grey", 1000))
    
async function rainbow() {
    await timedColorChange('red',1000)
    await timedColorChange('orange',1000)
    await timedColorChange('yellow',1000)
    await timedColorChange('green',1000)
    await timedColorChange('blue',1000)
    await timedColorChange('indigo',1000)
    await timedColorChange('violet', 1000)
    return 'All Done'
}

// rainbow().then(()=> console.log("End of Rainbow"))

async function printRainbow() {
    await rainbow();
    console.log("End of Rainbow")
}

printRainbow()



// error handling in async functions
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1')
        console.log(data1)
        let data2 = await fakeRequest('/page2')
        console.log(data2)
    } catch (e) {
        console.log('Caught an ERROR!')
        console.log('error is :', e)
    }
    
}