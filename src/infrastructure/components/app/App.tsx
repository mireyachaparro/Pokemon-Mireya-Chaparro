import React from "react";
import "./App.css";
import { Header } from "../header/header";
import { AppRoutes } from "../routes/app.routes";
import { SearchBar } from "../search/searchBar";

function App() {
    return (
        <>
            <Header></Header>
            <SearchBar></SearchBar>
            <AppRoutes></AppRoutes>
        </>
    );
}

export default App;
