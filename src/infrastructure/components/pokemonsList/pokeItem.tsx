import React from "react";
import { PokeInitial } from "../../model/poke.model";

function pokeItem({ pokemon }: { pokemon: PokeInitial }) {
    return (
        <li key={pokemon.id}>
            <p>{pokemon.name}</p>
            <img src={pokemon.imgSrc} alt={pokemon.name} />
        </li>
    );
}

export default pokeItem;
