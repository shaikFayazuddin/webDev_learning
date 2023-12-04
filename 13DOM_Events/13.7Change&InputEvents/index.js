const input = document.querySelector('input')
const h1 = document.querySelector("h1")

// input.addEventListener('change', function(event){
//     console.log('change event occured')
// })

input.addEventListener('input', function (e) {
    // console.log('input event')
    h1.innerText = input.value
})