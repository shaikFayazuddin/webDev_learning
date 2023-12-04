// objects are collections of poperties
// Properties are a key-value pair
// Rather than accessing data using an index, we use custom keys
// all keys are converted to strings)(except for symbols)

// To make an object literal:
const dog = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    age: 7
}
// All keys will be turned into strings!

// To retrieve a value:
console.log(dog.age); //7
console.log(dog["age"]); //7

//updating values
dog.breed = "mutt";
dog["age"] = 8;
console.log(dog)

const details = {
    userName : 'Fayaz',
    userAge: 23,
    isFunny: true,
    favFood : ['rice','biryani','roti']
}

console.log(details)
console.log(details.userName)
console.log(details['favFood'][1])
console.log(details.userAge)

details.userAge = 23.3
console.log(details.userAge)

const years = {
    1947 : "Independence",
    2011: "India won world cup",
    1999 : "Fayaz was born"
}
console.log(years[1947])
console.log(years['1999'])
console.log(years[2011])

let yob = 1999
console.log(years[yob])
let exString = years[1947] + years[2011]
console.log(exString)

const dumb = {
    true: 'dat',
    null: 'qwerty',
}
console.log(dumb['true' + 'null'])
console.log(dumb.null)
console.log(dumb.true)

// ##########################################
// MODIFYING OBJECTS
const midterms = {
    rob: 96,
    tom: 78,
}
console.log(midterms)
midterms.rob = 69
console.log(midterms)

midterms.ally = 100
console.log(midterms)

// #############################################
//  NESTING ARRAYS AND OBJECTS
// ARRAYS + OBJECTS

// array of objects
const cred = [
    {
        id: 2299373,
        mail: 'fayaz@tcs.com',
        dob: '07/08/1999',
    },
    {
        id: 986676,
        mail: 'ruby@tcs.com',
        dob: '18/12/1999',
    },
    'nothing',
    ['hello', 'bye'],
    [
        'object inside array inside object',
        {
            weight: 54,
            height: 166,
            surname: "Shaik"
        }
    ]
]
console.log(cred)
console.log(cred[0].id)
// how to get "shaik" from above code
console.log(cred[4][1].surname)


// object of arrays

const students = {
    firstName: "David",
    lastName: "Jones",
    strengths: ["Music", 'Art'],
    examination: {
        midterms: 92,
        final:88
    },
    favSong: ['a','b']
}
console.log(students)
