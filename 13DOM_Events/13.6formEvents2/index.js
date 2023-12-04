const tweetForm = document.querySelector("#tweetForm")
const tweetContainer = document.querySelector("#Tweets")

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