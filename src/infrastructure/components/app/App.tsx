import React from "react";
import "./App.css";
import { Header } from "../header/header";
import PokeList from "../pokemonsList/pokemonsList";

function App() {
    return (
        <>
            <Header></Header>
            <PokeList></PokeList>
            <div>Pokemon</div>
        </>
    );
}

export default App;
