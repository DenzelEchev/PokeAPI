const apiData = {
    URL: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '245', //make it so that you can type in a number and get back the data that way
}

const {URL, type, id} = apiData
const apiUrl = `${URL}${type}/${id}`

fetch(apiUrl)
    .then((data) => data.json())
    .then((pokemon) => generatePokemon(pokemon))

    const generatePokemon = (data) => {
        console.log(data)
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

 