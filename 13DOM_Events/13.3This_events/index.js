const makeRandColor = () => {
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random() * 256)
    return  `rgb(${r},${g},${b})`
}

// const buttons = document.querySelectorAll("button")

// for (let button of buttons) {
//     button.addEventListener('click', function () {
//         button.style.backgroundColor = makeRandColor()
//         button.style.color = makeRandColor()
// })
// }

// const h1s = document.querySelectorAll("h1")
// for (let h1 of h1s) {
//     h1.addEventListener("click", function () {
//         h1.style.backgroundColor = makeRandColor()
//         h1.style.color = makeRandColor()
//     })
// }



// instead of writing the above code, THIS can be used to simply the code i.e by writing a fuction

const buttons = document.querySelectorAll("button")

for (let button of buttons) {
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll("h1")
for (let h1 of h1s) {
    h1.addEventListener("click", colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandColor()
    this.style.color = makeRandColor()
}