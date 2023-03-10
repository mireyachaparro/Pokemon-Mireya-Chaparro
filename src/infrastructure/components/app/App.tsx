import React from "react";
import "./App.css";
import { Header } from "../header/header";
import { AppRoutes } from "../routes/app.routes";
import { Auth0Provider } from "@auth0/auth0-react";
import { Menu } from "../menu/menu";

function App() {
    return (
        <>
            <Auth0Provider
                domain="dev-yzw15abg6jmdz0a5.us.auth0.com"
                clientId="Y8DVOy3j8H6Dd17A7Q6LQFPB7P7QU9jX"
                redirectUri={window.location.origin}
            >
                <Header></Header>
                <Menu></Menu>
                <AppRoutes></AppRoutes>
            </Auth0Provider>
        </>
    );
}

export default App;
