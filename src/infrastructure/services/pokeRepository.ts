import { PokeInitial, Pokemon } from "../model/poke.model";

export async function fetchPokemons(): Promise<PokeInitial[]> {
    const response = await fetch(
        "https://unpkg.com/pokemons@1.1.0/pokemons.json"
    );

    if (!response.ok) {
        throw new Error("Failed to Fetch");
    }

    const result = await response.json();

    const pokemons = result.results.map((pokemon: Pokemon) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        imgSrc: pokemon.sprites.normal.toLowerCase(),
    }));

    const noRepeat = pokemons.filter(
        (pokemon: any, index: number) =>
            pokemons.findIndex((other: any) => other.id === pokemon.id) ===
            index
    );

    return noRepeat;
}
