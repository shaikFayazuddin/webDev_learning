const imageContEl = document.querySelector('.image-container')
const btnEl = document.querySelector(".btn")

btnEl.addEventListener('click', () => {
    imageNum = 12
    addNewImages()
})

function addNewImages() {
    for (let index = 0; index < imageNum ; index++) {
        const newImg = document.createElement("img")
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
        imageContEl.appendChild(newImg)
        
    }
}