const animals = ['cat', 'dog', 'elephant', 'horse']
const containerEl = document.querySelector('.container')

animals.forEach(animal => {
    const btnEl = document.createElement('button')
    btnEl.classList.add('btn')
    btnEl.innerText = animal
    btnEl.style.backgroundImage = 'url(img/' + animal + '.jpg'
    containerEl.appendChild(btnEl)

    const audioEl = document.createElement('audio')
    audioEl.src = 'audio/' + animal + '.mp3'
    containerEl.appendChild(audioEl)

    btnEl.addEventListener('click', () => {
        audioEl.play()
    })

    window.addEventListener('keydown',(event)=> {
        if (event.key === animal.slice(0, 1)) {
            audioEl.play()
            btnEl.style.transform = 'scale(0.9)'
            setTimeout(() => {
                btnEl.style.transform = 'scale(1)'
            },100)
        }
    })
})