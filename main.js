const endpoint = 'https://pokeapi.co/api/v2/pokemon'
document.querySelector('#button').addEventListener('click', () => {
    const inputValue = document.querySelector('#pokeNum').value
    fetchPokemon(inputValue)
})

function fetchPokemon(pokemonId){
    
    if(pokemonId == parseInt(pokemonId) && parseInt(pokemonId) < 898 && parseInt(pokemonId) !== 0){
    fetch(`${endpoint}/${pokemonId}`)
    .then((response) => response.json())
    .then((pokeData) => (generatePokemon(pokeData)))
    } else {
        console.log('error')
    }
    } 

    function findTypeForClass(pokemon){
        if(pokemon.types.length > 0){
            return pokemon.types[0].type.name
        }else{
            return ""
        }
    }

const generatePokemon = (data) => {
    const html = `
    <div class="pokeFetch ${findTypeForClass(data)}">
        <div class="imgcard ${findTypeForClass(data)}">
        <img src="${data.sprites.other["official-artwork"].front_default}">
        </div>
        <section class="details">
        <div class="pokeName ${findTypeForClass(data)}">#${data.id}&nbsp| ${data.name[0].toUpperCase() + data.name.substring(1)}</div>
        <div class="stats ${findTypeForClass(data)}">
        <span>Height:${data.height/10}m &nbsp| Weight:${data.weight/10}kg</span>
        </div>
        ${data.types.map(type => `
            <span class="${type.type.name}">${type.type.name}</span>
        `)}
        </section>
    </div>
    `
    const pokemonDiv = document.querySelector('.pokeContainer')
    pokemonDiv.innerHTML = html


}



