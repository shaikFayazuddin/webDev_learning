// properties and methods

// manipulating the elements using query selector


// using########### inner text #########################################
console.log(document.querySelector('p'))
console.dir(document.querySelector('p'))
console.log(document.querySelector('p').innerText)

const para = document.querySelector('p')
console.dir(para)
// document.querySelector('p').innerText = 'lol lol lol'

// using text content#####################################################
console.log(document.querySelector('p').textContent)


// manipulating using query slector and for loop
const allLinks = document.querySelectorAll('a');
console.log(allLinks)
// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

for (let link of allLinks) {
    link.style.color = 'rgb(200, 108, 214)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

// using inner HTML--gets elements inside elements  #############
console.log(document.querySelector('p').innerHTML)
document.querySelector('h1').innerHTML = '<i>Cotton Chickens</i>'
document.querySelector('h1').innerHTML += '<sup>R</sup>'
console.log(document.querySelector('h1').innerHTML)

// attributes(accessing the attributes first method)
console.log(document.querySelector('#banner'))
console.log(document.querySelector('#banner').id)
document.querySelector('#banner').id = 'notABanner'
console.log(document.querySelector('#notABanner').id)
// changing back the id name to its original
document.querySelector('#notABanner').id = 'banner'
console.log(document.querySelector('#banner').src)

// another method to select attributes #######################
const firstLink = document.querySelector('a')
console.log(firstLink.href)
console.log(firstLink.title)
console.log(firstLink.getAttribute('href'))
console.log(firstLink.getAttribute('title'))

// manipulating the href using setattribute method  #######################33
firstLink.setAttribute('href', "http://www.google.com")
console.log(firstLink.href)
console.log(firstLink.getAttribute('href'))

// 
// const ourInput = document.querySelector('input[type="password"]')
// console.log(ourInput)
const userInput = document.querySelector('input')
console.log(userInput)
// userInput.type = 'text'
// userInput.type = 'password'
userInput.setAttribute('type', 'color')


// manipulating styles using Java Script
const h1 = document.querySelector('h1')
console.log(h1)
console.dir(h1)
console.dir(h1.style) //will show all empty 
console.dir(h1.style.color) //will show nothing as it shows only instyle CSS
//giving a instyle prop to h1 in html markup
// and now the line 57 will show magenta as inline style was given to h1 element

// manipulating styles
h1.style.color = 'red'
console.dir(h1.style.color) 
h1.style.fontSize = '5em'
h1.style.border = '8px solid blue'
h1.style.textAlign = 'center'
console.log(h1.style)
// all the above styles are instyles


// #############################
// how to get css property of an element as the above methods shows only inline styles
console.log(window.getComputedStyle(h1))
console.log(window.getComputedStyle(h1).fontSize)
console.log(window.getComputedStyle(h1).color)
console.log(window.getComputedStyle(h1).margin)

// 

// class list ##########################################################
// intially there no classes associated with h2 element which displays 'contents'
// now classes can be added and can be manipulated
// note: styles are already written with the class name
const h2 = document.querySelector('h2')
console.log(h2)
console.log(h2.getAttribute('class'))
h2.setAttribute('class', 'purple')
h2.setAttribute('class', 'border') //this will reomove the existing class
// to set both attribures at once
let currentClasses = h2.getAttribute('class')
console.log(currentClasses)
h2.setAttribute('class', `${currentClasses} purple`)
// this is annoying for large scale
// to overcome this
console.log(h2.classList)
h2.classList.add('newClass')
console.log(h2.classList)
h2.classList.remove('newClass')
console.log(h2.classList)
// toggle classes
console.log(h2.classList.toggle('purple'))
console.log(h2.classList.toggle('purple'))
// checking classes
console.log(h2.classList.contains('purple'))
console.log(h2.classList.contains('anyClass'))

// parentElement  ####################################################
// to access parent element of a body
const firstBold = document.querySelector('b')
console.log(firstBold)
console.log(firstBold.parentElement)
console.log(firstBold.parentElement.parentElement)
console.log(firstBold.parentElement.parentElement.parentElement)
console.log(firstBold.parentElement.parentElement.parentElement.parentElement)

// childElementCount and children ##################
const paragraph = firstBold.parentElement
console.log(paragraph.childElementCount)
console.log(paragraph.children)
console.log(paragraph.children[1])

// nextSibling and previousSibling ####################
const squareImage = document.querySelector('.square')
console.log(squareImage)
console.log(squareImage.nextSibling) //this will show the text which is generated by browser as white space
// white node will be show as output
// to get next sibling we use nextElementSibling
console.log(squareImage.nextElementSibling)
console.log(squareImage.previousElementSibling)

// creating new elements in DOM
// appendChild
const newImg = document.createElement('img')
newImg.src = 'https://www.licious.in/blog/wp-content/uploads/2022/06/roast-chicken.jpg'
document.body.appendChild(newImg)
newImg.classList.add('square')

// one more
const newH3 = document.createElement('h3')
newH3.innerText = 'I was added through java script'
document.body.appendChild(newH3)

// another method to append and append more than one thing
// append ###############
const p = document.querySelector('p')
p.append('I am new text yayyyyyyyyyyyyyyyyyyyyyyyyyyyyy')
p.append('I am new text yayyyyyyyyyyyyyyyyyyyyyyyyyyyyy','so am Iiiiiiiiiii')

// prepend ####################
const newB = document.createElement('b')
newB.append('Hi, I was added here by JS ')
p.prepend(newB)

// inserting elements
const newh2 = document.createElement('h2')
newh2.append("Are adorable chickens")
const samph1 = document.querySelector('h1')
const sampUl = document.querySelector('ul')
const sampDiv = document.querySelector('div')

samph1.insertAdjacentElement('beforebegin', newh2)
sampUl.insertAdjacentElement('afterbegin', newh2)
sampDiv.insertAdjacentElement('beforeend', newh2)
samph1.insertAdjacentElement('afterend', newh2)

// one more method
const h3 = document.createElement('h3')
h3.innerText = 'I am h3 by JS'
h1.after(h3)

// reomoveChild() ########################################
// syntax to remove a child is by selecting its parent and using the method
const firstLi = document.querySelector('li')
const ul = firstLi.parentElement
ul.removeChild(firstLi)
// or 
// firstLi.parentElement.removeChild(firstLi)

// remove ####################
const img = document.querySelector('img')
img.remove()