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
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Busca un pokemon"
                        aria-label="Busca un pokemon"
                        aria-describedby="button-addon2"
                    ></input>
                    <button
                        className="btn btn-primary text-white"
                        type="button"
                        id="button-addon2"
                    >
                        Buscar
                    </button>
                </div>

                {/* <input
                    type="search"
                    placeholder="Busca un pokemon"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <input type="submit" value="Buscar" /> */}
            </form>
            <p>{filteredPokemons.map((pokemon) => pokemon.name)}</p>
        </>
    );
}
