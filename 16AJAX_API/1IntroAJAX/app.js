//  NOT AT ALL IMPORTANT TO REMEMBER ANY OF THIS CODE


const req = new XMLHttpRequest()

req.onload = function () {
    console.log("IT Worked")
    // console.log(this)
    // console.log(this.responseText)
    const data = JSON.parse(this.responseText)
    // console.log(data)
    console.log(data.name, data.height)
}
req.onerror = function () {
    console.log("ERROR!!")
    console.log(this)
}

req.open("GET", "https://swapi.dev/api/people/19/")
req.send()


// usning FETCH
fetch('https://swapi.dev/api/people/1/')
    .then((res) => {
        console.log("Resolved!", res)
        return res.json()
    })
    .then((data) => {
        console.log(data)
        console.log(data.name, data.height)
    })
    .catch((e) => {
        console.log("ERROR!!",e)
    })

// making multiple requests using fetch
fetch('https://swapi.dev/api/people/1/')
    .then((res) => {
        console.log("Resolved!", res)
        return res.json()
    })
    .then((data) => {
        console.log(data)
        console.log(data.name, data.height)
        return fetch('https://swapi.dev/api/people/5/')
    })
    .then((res) => {
        console.log("SECOND REQUEST RESOLVED")
        return res.json()
    })
    .then((data) => {
        console.log(data)
        console.log(data.name, data.height)
    })
    .catch((e) => {
        console.log("ERROR!!",e)
    })


// using async funtion
const loadStarWarPeople = async () => {
    try {
        const res = await fetch('https://swapi.dev/api/people/5/')
        const data = await res.json()
        console.log(data)
        const res2 = await fetch('https://swapi.dev/api/people/8/')  
        const data2 = await res2.json()
        console.log(data2)
    } catch (e) {
        console.log("ERROR!", e)
    }
    
}

loadStarWarPeople()