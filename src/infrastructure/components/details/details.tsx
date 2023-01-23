import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pokeDetails } from "../../model/poke.model";
import { fetchDetails } from "../../services/pokeDetails";

function Details() {
    const [pokemon, setPokemon] = useState<pokeDetails>();
    const { name } = useParams();

    useEffect(() => {
        async function getPokemon() {
            const fetchedDetails = await fetchDetails(name as string);
            setPokemon(fetchedDetails);
        }
        getPokemon();
    }, [name]);

    return (
        <>
            <h1>{pokemon?.name.toLocaleUpperCase()}</h1>
            <p>N. {pokemon?.id}</p>
            <img src={pokemon?.imgSrc} alt={pokemon?.name} />
            <p>Hit Points: {pokemon?.hp}</p>
            <p>Attack: {pokemon?.attack}</p>
            <p>Defense: {pokemon?.defense}</p>
        </>
    );
}
export default Details;
