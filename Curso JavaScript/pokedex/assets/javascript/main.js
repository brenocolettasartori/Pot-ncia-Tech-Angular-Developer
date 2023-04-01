// Manipulando o HTML
const pokemonList = document.getElementById('pokemonList')
// pokemonList.innerHTML += '<li>Teste</li>'
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 20
let offset = 0

function converterPokemonTypesToList(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => {
        return `
            <li class="type">${typeSlot.type.name}</li>
        `
    })
}

function converterPokemonToList(pokemon) {
    return `
    <li class = "pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class ="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
        <img src="${pokemon.image}" alt="${pokemon.name}" srcset="">
        </div> 
    </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map(converterPokemonToList).join('')
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})

//pokeApi.getPokemons().then((pokemons = []) => {
    // const newList = pokemons.map((pokemon) => {
    //     return converterPokemonToList(pokemon)
    // })
    
    // const newList = pokemons.map(converterPokemonToList).join('')

    // newHtml = newList.join('')
    // pokemonList.innerHTML += pokemons.map(converterPokemonToList).join('')
    // console.log(newList)

    //     const listItens = []
    //     for (let index = 0; index < pokemons.length; index++) {
    //         const pokemon = pokemons[index]
    //         listItens.push(converterPokemonToList(pokemon))
    //         //pokemonList.innerHTML += converterPokemonToList(pokemon)
    //     }
    //     console.log(listItens)
//})


