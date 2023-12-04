const contEl = document.querySelector('.container')
const colContEl = document.querySelector('color-container')

for (let index = 0; index < 54999; index++) {
    const colorContainerEl = document.createElement('div')
    colorContainerEl.classList.add('color-container')
    contEl.appendChild(colorContainerEl)
}

const colorContainerEls = document.querySelectorAll('.color-container')

generateColors()

function generateColors(){
    colorContainerEls.forEach(
        (colContEl)=> {
            const newColorCode = randomColor()
            colContEl.style.backgroundColor = '#'+newColorCode
            colContEl.innerText = '#'+newColorCode
        }
    )
}

function randomColor(){
    const chars = '0123456789abcdef'
    const colorCodeLength = 6
    let colorCode = ''
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random()*chars.length)
        // the above line is generate a random number from 0 to 15 and to use the number for slicing of the string 'chars'
        colorCode += chars.substring(randomNum, randomNum + 1)
    }
    return colorCode
}