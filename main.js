//get the value from the input, pass it into fetch
const endpoint = 'https://pokeapi.co/api/v2/pokemon'
document.querySelector('#button').addEventListener('click', fetchPokemon)

function fetchPokemon(pokemonId){
    pokemonId = document.querySelector('#pokeNum').value
    fetch(`${endpoint}/${pokemonId}`)
    .then((data) => data.json())
    .then((pokeData) => (generatePokemon(pokeData)))

}


const generatePokemon = (data) => {
    const html = `
    <div class="Pokemon">${data.name}</div>
    <img src=${data.sprites.front_default}>
    <div class="details">
    <span>Height:${data.height}</span>
    <span>Weight:${data.weight}</span>
    </div>
    `

    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
}

