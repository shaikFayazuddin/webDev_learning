// practise one
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

// //YOU CODE GOES HERE:
// const allSpans = document.querySelectorAll('span')
// console.log(allSpans)

// let i = 0
// for (let span of allSpans) {
//     span.style.color = colors[i]
//     i++
//     }

// practise 2
// const allLists = document.querySelectorAll('li')
// console.log(allLists)
// for (let list of allLists) {
//     console.log(list)
//     list.classList.toggle('highlight')
// }

// practise 3
let container = document.querySelector('body')
for (let i = 0; i < 100; i++){
    let newButton = document.createElement('button')
    container.appendChild(newButton)
    newButton.append("Hey!!")
}