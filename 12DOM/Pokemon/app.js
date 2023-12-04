// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
	

    for (let i = 1; i <= 905; i++) {
    
    // creating a division and adding img element and a span--both inside the div element
        const pokemon = document.createElement('div');
    // adding a class pokemon to the div
        pokemon.classList.add('pokemon');
            
        //creating a span and adding inside the div and adding innertext 
        const label = document.createElement('span');
        label.innerText = `#${i}`;

        // creating new image and adding the source
        const newImg = document.createElement('img');
        if (i <= 9) {
            newImg.src = `${baseURL}00${i}.png`
        }
        else if (i < 99) {
            newImg.src = `${baseURL}0${i}.png`
        }
        else if (i > 99) {
            newImg.src = `${baseURL}${i}.png`
        }
        

        // adding image to div element
        pokemon.appendChild(newImg);
        // adding span to div element 
        pokemon.appendChild(label);
        //adding the div to container 
        container.appendChild(pokemon)
}
