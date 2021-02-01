// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');

for (i = 1 ; i<= 151; i++)  {
    // Creates the pokemon container, the image and the span
    const pokemonContainer = document.createElement('div');    
    const pokemonImage = document.createElement('img');
    const pokemonNumber = document.createElement('span'); 
    
    // Adds the desired content to the elements
    pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    pokemonNumber.innerText = `#${i}`;

    // Appends the image and span to the 'eachPokemon' container
    pokemonContainer.appendChild(pokemonImage);
    pokemonContainer.appendChild(pokemonNumber);

    // Appends the pokemonContainer to the main container section
    container.appendChild(pokemonContainer);
}
