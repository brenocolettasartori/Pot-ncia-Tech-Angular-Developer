// Consumir API

const pokeApi = {}

function convertPokeDetailListToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types // destructing, pegando o 1 valor de types = (types.get(0))
    pokemon.types = types
    pokemon.type = type    
    //pokemon.types = pokeDetail.map((typeSlot) => typeSlot.type.name)
    //pokemon.type = pokemon.types.get(0)

    pokemon.image = pokeDetail.sprites.other.dream_world.front_default
    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json()) // novo fetch na url do pokemon específico e converter para um JSON
        .then(convertPokeDetailListToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url) // servidor busca lista de pokemons
        .then((response) => response.json()) // converteu lista para JSON
        .then((jsonBody) => jsonBody.results) // pega a lista de JSON e pega a lista que serão os pokemons (results)
        //.then((pokemons) => pokemons.map((pokemon => fetch (pokemon.url).then((response) => response.json())))) // transforma essa lista em uma nova lista que será uma lista de promessas de detalhes de pokemon. Vai vir uma lista de response e precisa ser tratada para vir uma lista JSON
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // transforma essa lista em uma nova lista que será uma lista de promessas de detalhes de pokemon. Vai vir uma lista de response e precisa ser tratada para vir uma lista JSON
        .then((detailRequests) => Promise.all(detailRequests)) // nova lista = detailRequests e a gente espera essa lista ser resolvida
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => console.error(error))
}