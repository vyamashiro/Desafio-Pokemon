import React from 'react';
import FetchPokemon from './FetchPokemon';

function CreatePokemon() {

    Promise.all(FetchPokemon()).then(pokemons => {
        const pokemonAll = pokemons.reduce((acumulador, pokemon) => {
        
        acumulador += `
            <div class="card">
                <h2 class="card-title">nº${pokemon.id} - ${pokemon.name}</h2>
                <div class="frame-image">
                    <img class="card-image" alt="${pokemon.name}" src="${pokemon.sprites.other['official-artwork'].front_default}" />
                </div>
                <ul class="card-atributes">
                    <li class="item-atribute">${pokemon.stats[0].stat.name}: ${pokemon.stats[0].base_stat}</li>
                    <li class="item-atribute">${pokemon.stats[1].stat.name}: ${pokemon.stats[1].base_stat}</li>
                    <li class="item-atribute">${pokemon.stats[2].stat.name}: ${pokemon.stats[2].base_stat}</li>
                    <li class="item-atribute">${pokemon.stats[3].stat.name}: ${pokemon.stats[3].base_stat}</li>
                    <li class="item-atribute">${pokemon.stats[4].stat.name}: ${pokemon.stats[4].base_stat}</li>
                    <li class="item-atribute">${pokemon.stats[5].stat.name}: ${pokemon.stats[5].base_stat}</li>
                <ul/>
            </div>
            `        
        return acumulador;
    }, '');

    const ul = document.querySelector('[data-js="pokedex"]')
    ul.innerHTML = pokemonAll

    });  

    return (
        <div className="container">
            <h1 className="main-title">Pokedex</h1>
            <div data-js="pokedex" className="pokedex"></div>
        </div>
    )
}

export default CreatePokemon;