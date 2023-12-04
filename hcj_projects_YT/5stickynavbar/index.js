// adding functionality i.e when page is scrollecd to certian limit the navbar color changes
const navEl = document.querySelector(".navbar")
const bottomContainerEl = document.querySelector('.bottom-container')

console.log(navEl.offsetHeight)
console.log(bottomContainerEl.offsetTop)

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if (window.scrollY > bottomContainerEl.offsetTop - navEl.offsetHeight - 50) {
        navEl.classList.add('active')
    } else {
        navEl.classList.remove('active')
    }
})