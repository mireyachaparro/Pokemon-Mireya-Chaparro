import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pokeDetails } from "../../model/poke.model";
import { fetchDetails } from "../../services/repoDetails/pokeDetails";

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
            <div className="d-flex flex-column justify-content-center align-items-center col-full mt-2">
                <div className="d-flex flex-column align-items-center p-2">
                    <h1>{pokemon?.name.toLocaleUpperCase()}</h1>
                    <p>N. {pokemon?.id}</p>
                    <img
                        src={pokemon?.imgSrc}
                        alt={pokemon?.name}
                        width="120px"
                    />
                    <p>Hit Points: {pokemon?.hp}</p>
                    <p>Attack: {pokemon?.attack}</p>
                    <p>Defense: {pokemon?.defense}</p>
                </div>
            </div>
        </>
    );
}
export default Details;
