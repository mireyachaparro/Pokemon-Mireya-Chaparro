import React from "react";
import { Link } from "react-router-dom";
import { PokeInitial } from "../../model/poke.model";

function pokeItem({ pokemon }: { pokemon: PokeInitial }) {
    return (
        <li className=" border border-3 border-info-subtle mt-2 rounded-2">
            <div className="d-flex align-self-center bg-info-subtle">
                <Link
                    to={"/pokemons/" + pokemon.name.toLowerCase()}
                    key={pokemon.name}
                >
                    <p className="text-dark d-flex justify-content-center bg-warning-subtle rounded-top-1 py-2 border-bottom border-info-subtle">
                        {pokemon.name}
                    </p>
                    <img src={pokemon.imgSrc} alt={pokemon.name} width="120" />
                </Link>
            </div>
        </li>
    );
}

export default pokeItem;
