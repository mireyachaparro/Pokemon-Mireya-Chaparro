import { useState } from "react";
import { Pokemon } from "../../model/poke.model";

export function SearchBar() {
    const [query, setQuery] = useState("");
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const filteredPokemons = pokemons.slice(0, 151).filter((pokemon) => {
        return pokemon.name
            .toLocaleLowerCase()
            .match(query.toLocaleLowerCase());
    });

    return (
        <>
            <form>
                <input
                    type="search"
                    placeholder="Busca un pokemon"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <input type="submit" value="Buscar" />
            </form>
            <p>{filteredPokemons.map((pokemon) => pokemon.name)}</p>
        </>
    );
}
