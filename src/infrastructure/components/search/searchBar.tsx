import { searchType } from "../../model/poke.model";
import { fetchPokemons } from "../../services/repoPoke/pokeRepository";

export function SearchBar({ query, setQuery }: searchType) {
    const handleInput = (event: any) => {
        event.preventDefault();
        if (query === "") fetchPokemons();
        setQuery(event.target.value);
    };
    return (
        <>
            <form>
                <div className="input-group mb-3 px-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Busca un pokemon"
                        aria-label="Busca un pokemon"
                        aria-describedby="button-addon2"
                        value={query}
                        onChange={handleInput}
                    ></input>
                </div>
            </form>
        </>
    );
}
