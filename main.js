const pokeUrl = 'https://pokeapi.co/api/v2/pokemon'
const flavorTextUrl = 'https://pokeapi.co/api/v2/pokemon-species'
document.querySelector('button').addEventListener('click', () => {
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
    const imgRenderHolder = document.querySelector('.pokeImg')
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
    
    imgRenderHolder.innerHTML = imgRender
}

const generateFlavorText = (data) => {
   

}

