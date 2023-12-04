const button = document.querySelector("button")
button.addEventListener("click", function (event) {
    console.log(event)
})

const input = document.querySelector("input")

// input.addEventListener("keydown", function () {
//     console.log("keydown")
// })

// input.addEventListener("keyup", function () {
//     console.log("keyup")
// })

// input.addEventListener("keydown", function (event) {
//     console.log(event)
//     console.log(event.code)
//     console.log(event.key)
// })

window.addEventListener("keydown", function (event) {
    switch (event.code) {
        case 'ArrowUp':
            console.log("UP!")
            break
        case 'ArrowDown':
            console.log("Down!")
            break
        case 'ArrowRight':
            console.log("Right!")
            break
        case 'ArrowLeft':
            console.log("Left!")
            break
        default:
            console.log("ignored!!")
        
    }
})