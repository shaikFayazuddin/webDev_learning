
console.log(document)
console.dir(banner)


const history_chicken = document.getElementById("History")
console.log(document.getElementById("History"))
console.log(history_chicken)

const allImages = document.getElementsByTagName('img');
const allpara = document.getElementsByTagName('p');

console.log(allpara)
console.log(allImages) //returns array but not an array
// console.dir(allImages[0])
console.log(allImages[0])


for (let img of allImages) {
    console.log(img.src)
} //runnig for loop through HTMLDocument


for (let img of allImages) {
    img.src = 'https://fitindia.gov.in/wp-content/uploads/2020/08/IMG_20200826_0753391212.jpg'
} //changing the image source


const squareImages = document.getElementsByClassName('square');
console.log(squareImages)

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
} //this will change  the url of images with class square









// QUERY SELECTOR - a newer , all in one method to select a single element

// finds first h1 element:
const first_h = document.querySelector('h1')
console.log(first_h)

// finds first element with ID of red:
const first_id = document.querySelector('#banner')
console.log(first_id)

// finds first element with class of big:
const first_class = document.querySelector('.tocnumber')
console.log(first_class)

// finds second image
const second_img = document.querySelector('img:nth-of-type(2)')
console.log(second_img)

// selecting by attribute
const poultry = document.querySelector('a[title="Poultry"]')
console.log(document.querySelector('a[title="Poultry"]'))
console.log(poultry)


const par = document.querySelectorAll('p');
console.log(document.querySelectorAll('p'))
console.log(par)

// selecting all anchor tags in paragraphs
console.log(document.querySelectorAll('p a'))

const links = document.querySelectorAll('p a')

for (let link of links) {
    console.log(link.href)
}