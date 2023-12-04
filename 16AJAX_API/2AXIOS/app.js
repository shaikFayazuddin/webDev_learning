axios
    .get('https://swapi.dev/api/people/5/')
    .then((res) => {
    console.log("RESPONSE:",res)
})
    .catch((e) => {
    console.log("ERROR!!", e)
    })


// using async function
const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
        console.log(res.data)
    } catch (e) {
        console.log("ERROR",e)
    }
    
}
getStarWarsPerson(9)