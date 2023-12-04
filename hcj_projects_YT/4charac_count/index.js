const textEl = document.getElementById('textarea')
const totalCounterEl = document.getElementById('total-counter')
const reaminingCounterEl = document.getElementById('remaining-counter')

textEl.addEventListener('keyup', () => {
    updateCounter()
})

updateCounter()

function updateCounter() {
    totalCounterEl.innerText = textEl.value.length
    reaminingCounterEl.innerText = textEl.getAttribute('maxLength') - textEl.value.length
}