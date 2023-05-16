let offset = 0
const limit= 10 
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

const loadMoreButton = document.getElementById ('loadMoreButton')



function convertPokemonTypesToLi(pokemonTypes = []) {
    return pokemonTypes.map((typeSlot) => `<li class="type"> ${type}</li>`);
        
   
};

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) =>  `<li class="type"> ${type}</li>`).join('')}
                                  
        </ol>
                        Bulbasaur
                    <img src="${pokemon.photo}" alt="Bulbasaur">
                    <img src= alt="${pokemon.name}">
                    </div>
            </li>
            `
}

const pokemonList = document.getElementById('pokemonList')

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
 
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
         
    })
}


loadPokemonItens(limit, offset)
loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

