const endpoint = 'https://pokeapi.co/api/v2/pokemon'
document.querySelector('#button').addEventListener('click', () => {
    const inputValue = document.querySelector('#pokeNum').value
    fetchPokemon(inputValue)
})

function fetchPokemon(pokemonId){
    
    if(pokemonId == parseInt(pokemonId) && parseInt(pokemonId) < 898 && parseInt(pokemonId) !== 0){
    fetch(`${endpoint}/${pokemonId}`)
    .then((data) => data.json())
    .then((pokeData) => (generatePokemon(pokeData)))
    } else {
        console.log('error')
    }
    } 


const generatePokemon = (data) => {
    const html = `
    <div class="Pokemon">${data.name}</div>
    <img src=${data.sprites.front_default}>
    <div class="details">
    <span>Height:${data.height/10}m</span>
    <span>Weight:${data.weight/10}kg</span>
    </div>
    `

    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
}

