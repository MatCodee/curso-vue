<template>
    <h1 v-if="!pokemon">Espere un momento...</h1>
    <div v-else>
        <h1>Quien es este pokemon?</h1>
        <!-- Imagn del pokemon -->
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPoke" />
        <!-- Opciones -->      
        <PokemonOptions :arrayPokemons="arrayPokemons" @selectionPokemon="checkAnswer" />  
    </div>
    <template v-if="showAnswer">
        <h1 >{{ans}}</h1>
        <button @click="resetGame">Jugar de nuevo</button>
    </template>
    
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data() {
        return {
            arrayPokemons: [],
            pokemon: null,
            showPoke: false,
            showAnswer: false,
            ans: null,
        }
    },
    mounted() {
        this.getArrayPokemons();
    },
    methods: {
        async getArrayPokemons() {
            this.arrayPokemons = await getPokemonOptions();

            const rndInt = Math.floor( Math.random() * 4);
            this.pokemon = this.arrayPokemons[rndInt];
        },
        checkAnswer(pokemonId) {
            this.showPoke = true;
            this.showAnswer = true;
            if(this.pokemon.id == pokemonId) {
                this.ans = `Correcto el nombre del pokemon es: ${this.pokemon.name}`;
            }else {
                this.ans = `Incorrecto el nombre del pokemon es: ${this.pokemon.name}`;
            }
        },
        resetGame() {
            this.arrayPokemons = [];
            this.pokemon = null;
            this.getArrayPokemons();
            this.showPoke = false;
            this.showAnswer = false;
        }
    }
}
</script>