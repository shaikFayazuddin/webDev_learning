const form = document.querySelector("#shelterForm")
const input = document.querySelector("#catName")
const list = document.querySelector('#cats')

// form.addEventListener("submit", function (event) {
//     console.log('submitted!!')
// })

// the above code gives error in console as the page is refreshed and to avoid this we use 'preventDefault'


form.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log("The form is submitted!!!")
    const catName = input.value 
    const newLi = document.createElement("LI")
    newLi.innerText = catName
    list.append(newLi)
    input.value = ''
})