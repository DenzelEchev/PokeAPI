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

const generatePokemon = (data) => {
    const html = `
    <div class="renderBox ${findTypeForClass(data)}">
        <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name} Image" />

        <div class="pokeName">
            <div>${data.name[0].toUpperCase() + data.name.substring(1)}</div>
            <div>${data.id}</div>
        </div>

        <div class="pokeType">${data.types.map(type => `
            <span class="${type.type.name}">${type.type.name}</span>
        `).join(" ")}</div>

        <div class="pokeStats">
            <div>Height:${data.height/10}m</div>
            <div>Weight:${data.weight/10}kg</div>
        </div>
    </div>
    `
    const pokeRender = document.querySelector('.pokeRender')
    pokeRender.innerHTML = html
    
}


const generateFlavorText = (data) => {
   
    const flavorText = `
        <div>${data.flavor_text_entries[0].flavor_text}</div>
    `

    const flavorTextDiv = document.querySelector('.pokeFlavor')
    flavorTextDiv.innerHTML = flavorText
}

