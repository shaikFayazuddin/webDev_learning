// METHODS
const math = {
    mutliplyThree: function (x, y, z) {
        return x*y*z
    },
    cube: function (x) {
        return x*x*x
    }
}

console.log(math.mutliplyThree(2,3,9))
console.log(math.cube(3))

// new method of writing methods
const myMath = {
    square(num){
        return num*num
    },
    division(x, y) {
        return x/y
    },
}
console.log(myMath.division(45,5))
console.log(myMath.square(5))

// this in methods
// use the keyword 'this' to access other properties on the same object
const cat = {
    name : "Jaanu",
    color : "white",
    breed: "Persian",
    meow() {
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWWWWWWW!!`)
    }
}
cat.meow()
const meow2 = cat.meow
console.log(meow2)
console.log(meow2())

// ##############################
const hen = {
    name : "Helen",
    eggCount : 0,
    layAnEgg(){
        console.log("EGG");
        this.eggCount += 1
    }
}
console.log("Egg laying exercise")
console.log(hen.name)
console.log(hen.eggCount)
console.log(hen.layAnEgg())
console.log(hen.layAnEgg())
console.log(hen.layAnEgg())
console.log(hen.eggCount)
console.log(hen.name)
