import { useState } from "react";

export function SearchBar() {
    const [query, setQuery] = useState("");

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
        </>
    );
}
