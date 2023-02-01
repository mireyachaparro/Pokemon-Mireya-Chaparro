import { useEffect, useState } from "react";
import { fetchPokemons } from "../../services/repoPoke/pokeRepository";
import { Loading } from "../loading/loading";
import { SearchBar } from "../search/searchBar";
import PokeItem from "./pokeItem";

function PokeList() {
    const initialState = [{ name: "", id: "", imgSrc: "" }];
    const [query, setQuery] = useState("");
    const [pokemons, setPokemons] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchAllPokemons = async () => {
            setIsLoading(true);
            const getAllPokemons = await fetchPokemons();
            setPokemons(getAllPokemons);
            setIsLoading(false);
        };
        fetchAllPokemons();
    }, []);

    const filteredPokemons = pokemons.slice(0, 151).filter((pokemon) => {
        return pokemon.name
            .toLocaleLowerCase()
            .match(query.toLocaleLowerCase());
    });

    return isLoading || !pokemons ? (
        <Loading></Loading>
    ) : (
        <>
            <SearchBar query={query} setQuery={setQuery}></SearchBar>
            {filteredPokemons.slice(0, 151).map((pokemon) => (
                <ul className="list-unstyled px-4" key={pokemon.id}>
                    <PokeItem pokemon={pokemon}></PokeItem>
                </ul>
            ))}
        </>
    );
}

export default PokeList;
