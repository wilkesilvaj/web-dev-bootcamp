// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.querySelector('#container');

for (i = 1 ; i<= 100; i++)  {
    let pokemon = document.createElement('img');
    pokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    container.appendChild(pokemon);
}
