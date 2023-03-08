const pokeUrl = 'https://pokeapi.co/api/v2/pokemon'
const flavorTextUrl = 'https://pokeapi.co/api/v2/pokemon-species'
document.querySelector('#button').addEventListener('click', () => {
    const inputValue = document.querySelector('#pokeId').value
    fetchPokemon(inputValue)
    fetchFlavorText(inputValue)
})

async function fetchPokemon(pokemonId){
    
    if(pokemonId == parseInt(pokemonId) && parseInt(pokemonId) < 898 && parseInt(pokemonId) !== 0){
    const res = await fetch(`${pokeUrl}/${pokemonId}`)
    const pokeData = await res.json()
    return generatePokemon(pokeData)
    } else {
        console.log('error')
    }
} 

async function fetchFlavorText(pokemonId) {
    const res = await fetch(`${flavorTextUrl}/${pokemonId}`)
    const flavorData = await res.json()
    return generateFlavorText(flavorData)
}

function findTypeForClass(pokemon){
        if(pokemon.types.length > 0){
            return pokemon.types[0].type.name
        }else{
            return ""
        }
}
// add in a "Next" and "Previous" Pokémon varible to add date to the corresponding buttons
const generatePokemon = (data) => {
    const html = `
    <div class="pokeFetch ${findTypeForClass(data)}">
        <div class="imgcard ${findTypeForClass(data)}">
        <img class="pokeImg"src="${data.sprites.other["official-artwork"].front_default}">
        <div class="typeSec">
        ${data.types.map(type => `
            <span class="${type.type.name}">${type.type.name}</span>
        `)}
        </div>
        </div>
        <section class="details">
        <div class="pokeName ${findTypeForClass(data)}">#${data.id}&nbsp| ${data.name[0].toUpperCase() + data.name.substring(1)}</div>
        <div class="stats ${findTypeForClass(data)}">
        <span>Height:${data.height/10}m &nbsp| Weight:${data.weight/10}kg</span>
        
    

        </section>
    </div>
    `
    const pokemonDiv = document.querySelector('.pokeContainer')
    pokemonDiv.innerHTML = html
    
}

const generateFlavorText = (data) => {
    console.log(data.flavor_text_entries[0])
    const flavorText = `
        <div>${data.flavor_text_entries[0].flavor_text}</div>
    `

    const flavorTextDiv = document.querySelector('.pokeFlavor')
    flavorTextDiv.innerHTML = flavorText
}

