import React from "react";
import "./App.css";
import { Header } from "../header/header";
import { AppRoutes } from "../routes/app.routes";

function App() {
    return (
        <>
            <Header></Header>
            <AppRoutes></AppRoutes>
        </>
    );
}

export default App;
