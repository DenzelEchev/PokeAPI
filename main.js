const pokeUrl = 'https://pokeapi.co/api/v2/pokemon'
const flavorTextUrl = 'https://pokeapi.co/api/v2/pokemon-species'
document.querySelector('button').addEventListener('click', () => {
    const inputValue = document.querySelector('#pokeId').value
    fetchPokemon(inputValue)
    fetchFlavorText(inputValue)
})

async function fetchPokemon(pokemonId){
    
    if(pokemonId == parseInt(pokemonId) && parseInt(pokemonId) <= 1010 && parseInt(pokemonId) !== 0){
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
    const imgRenderHolder = document.querySelector('.pokeImg')
    const statsRenderHolder = document.querySelector('.pokeStats')
    const imgRender = `
    <div class="${findTypeForClass(data)} imgHolder">
        <img src="${data.sprites.other["official-artwork"].front_default}">
        <div class="typeSec">
        ${data.types.map(type => `
            <span class="${type.type.name}">${type.type.name}</span>
        `)}
        </div>
    </div>
    `
    const statsRender = `
    <div class="pokeName ${findTypeForClass(data)}">#${data.id}&nbsp| ${data.name[0].toUpperCase() + data.name.substring(1)}</div>
    <span>Height:${data.height/10}m &nbsp| Weight:${data.weight/10}kg</span>
    `

    imgRenderHolder.innerHTML = imgRender
    statsRenderHolder.innerHTML = statsRender
}

const generateFlavorText = (data) => {

    const flavorRender = document.querySelector('.pokeFlavorText')
    const flavorText = `
        <div class="pokeFlavor">${data.flavor_text_entries[0].flavor_text}</div>
        <div class="filler"></div>
    `
    flavorRender.innerHTML = flavorText

}

