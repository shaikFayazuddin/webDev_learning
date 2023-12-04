
let colors = ['red', 'orange', 'whiteee','bluck'];
console.log(colors)
console.log(colors[1])
console.log(colors[1][3])

colors[3] = 'black'
console.log(colors[3])

colors[4] = 'yellow'
console.log(colors[4])
console.log(colors)

colors[12] = 'maroon'
console.log(colors)

console.log(colors[9])

// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
colors.length; //3

// Important array methods:
//push(value) - adds value to the END of an array
let fruits = ['apple', 'banana']
fruits.push('cucumber ')
fruits.push('mango', 'grapes')
fruits.push('donut')
console.log(fruits)
//pop() - removes and returns last value in array
let snack = fruits.pop()
console.log(fruits)
console.log(snack)
console.log(fruits)
//unshift(val) - adds value to START of an array
fruits.unshift('apple')
console.log(fruits)
//shift() - removes and returns first element in an array
let extra = fruits.shift()
console.log(fruits)
console.log(extra)

fruits.unshift('a')
fruits.unshift('ap')
fruits.unshift('app')
fruits.unshift('appl')
fruits.unshift('applee')
console.log(fruits)
//#####################################################################

// concat()
const array1 = ['a','b','c']
const array2 = ['d', 'e', 'f']
const array3 = array1.concat(array2);

console.log(array3)

// includes
let result = array3.includes('f')
console.log(result)

// indexOf
console.log(array3.indexOf('lamp'))
console.log(array3.indexOf('d'))

// reverse()
array3.reverse()
console.log(array3)

// slice()
let animals = ['tiger', 'lion', 'cheetah', 'horse', 'buffalo','goat']
AnmIndex = animals.indexOf('horse')
let myFavAnmials = animals.slice(AnmIndex)
console.log(myFavAnmials)
console.log(animals.slice())
console.log(animals.slice(0,2))
console.log(animals.slice(-2))
console.log(animals.slice(2))

// splice()
const months = ['Jan', 'March', 'April', 'June']
months.splice(1, 0, "Feb");
console.log(months)

months.splice(4,1,"May")
console.log(months)

months.splice(3, 0, 'bad')
console.log(months)

months.splice(3, 1)
console.log(months)

months.splice(0, 5, 'car', 'jeep', 'truck')
console.log(months)

// sort
let scores = [1, 500, 2500, -12, 0, 34, 70]
console.log(scores.sort())

