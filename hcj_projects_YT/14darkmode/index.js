const checkboxEl = document.querySelector('.input')
const bodyEl = document.querySelector('body')

checkboxEl.checked = JSON.parse(localStorage.getItem('mode'))
updateBody()

function updateBody() {
    if (checkboxEl.checked) {
        bodyEl.style.background = 'black'
    } else {
        bodyEl.style.background = 'white'
    }
}

checkboxEl.addEventListener("input", () => {
    updateBody()
    updateLocalStorage()
})

function updateLocalStorage() {
    localStorage.setItem('mode',
    JSON.stringify(checkboxEl.checked))
}