// reference types and equality
console.log('hi'==='hi')
console.log(['hi','bye'] === ['hi','bye'])
console.log([1]===[1])
console.log([1] == [1])

// java does not comapare what inside the lists instead it compares
// compares the references in the memory
// due to the same reason the above lines gives false even though both
// the lists contain the same element

let nums = [4, 5, 6]
let numsCopy = nums
nums.push(7)
numsCopy.push(8,9)
console.log(nums)
console.log(numsCopy)
console.log(numsCopy === nums) // since numsCopy is a copy is nums and both point to the same referece in the memory
// copy of a list mirrors its parent and vice-versa

// #################
// const + arrays
const pi = 3.14
console.log(pi += 1) //this will throw error

// wiht arrays its different
console.log("hi")

const xy = [88, 56, 99]
console.log(xy)
digits.push('a')
console.log(xy)
digits.pop()
console.log(xy)

// ##########################################
// nested arrays
let board = [
    ['X', 'O', 'X'],
    ['O', null, 'X'],
    ['X','O','X']
]
console.log(board)



