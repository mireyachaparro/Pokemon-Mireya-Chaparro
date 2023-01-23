import { useEffect, useState } from "react";
import { fetchPokemons } from "../../services/pokeRepository";
import { Loading } from "../loading/loading";
import PokeItem from "./pokeItem";

function PokeList() {
    const initialState = [{ name: "", id: "", imgSrc: "" }];
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

    return isLoading || !pokemons ? (
        <Loading></Loading>
    ) : (
        <>
            {pokemons.slice(0, 151).map((pokemon) => (
                <ul key={pokemon.id}>
                    <PokeItem pokemon={pokemon}></PokeItem>
                </ul>
            ))}
        </>
    );
}

export default PokeList;
