import pokemonApi from "@/api/PokemonApi";

// Estamos generando una array de numeros y le asignamos el indice correspondiente
const getPokemons = () => {
    const pokemonArr = Array.from(Array(650));
    return pokemonArr.map( (_,index) => index + 1 )
}

// ordenamos los elementos del array con un random 
const getPokemonOptions = async () => {
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 );
    const pokemons = await getPokemonsNames( mixedPokemons.splice(0,4) );
    return pokemons;
}

const getPokemonsNames = async ( [a,b,c,d] = [] ) => {
    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]
    const [p1,p2,p3,p4] = await Promise.all(promiseArr); 
    return [
        {name: p1.data.name,id: p1.data.id},
        {name: p2.data.name,id: p2.data.id},
        {name: p3.data.name,id: p3.data.id},
        {name: p4.data.name,id: p4.data.id},
    ]
}



export default getPokemonOptions;