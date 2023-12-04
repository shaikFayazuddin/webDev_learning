// here we are using 2nd method
const btn = document.querySelector('#v')
btn.onclick = function () {
    console.log('You clicked me, why????')
    console.log('why are you clicking again?')
}

const box = document.querySelector('.square')
function scream() {
    console.log("AAAAAAHHHHHhhhhhhhhh")
    console.log('Stoop Touching me!!!!!!!!!!!')
}
box.onmouseenter = scream //limitation--only one function can be assigned


document.querySelector('h1').onclick = () => {
    alert('You have enterd h1 zone!!!!')
}

// method 3---using addEventListener
const btn3 = document.querySelector('#v3')
btn3.addEventListener('click', function () {
    alert("Clicked")
    console.log("You clicked 3rd version of button")
    scream
})
btn3.addEventListener('click', scream,{once: true})
// object can passed in the above line
// two functions are passed to same element