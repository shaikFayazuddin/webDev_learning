const tweetForm = document.querySelector("#tweetForm")
const tweetContainer = document.querySelector("#Tweets")


// const lis = document.querySelectorAll('li')
// for (let li of lis) {
//     li.addEventListener('click', function () {
//         li.remove()
// })
// }

// the new li's added are not being removed and hence the above lines are not that useful, refer the bottom lines


tweetForm.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log("Form Submitted")
    // const usernameInput = document.querySelectorAll('input')[0]
    // const tweetInput = document.querySelectorAll('input')[1]

    const username = tweetForm.elements.username.value
    const tweet = tweetForm.elements.tweet.value

    addTweet(username, tweet)
        
    tweetForm.elements.username.value = ''
    tweetForm.elements.tweet.value = ''

})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('LI')
    const bTag = document.createElement('b')
    bTag.append(username)
    newTweet.append(bTag)
    newTweet.append(`- ${tweet}`)
    tweetContainer.append(newTweet)
}

tweetContainer.addEventListener('click', function (e) {
    // console.log('click on UL')
    // console.log(e)
    // e.target.remove()
    e.target.nodeName === 'LI' && e.target.remove()
})