import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <header className="container-fluid row bg-danger sticky-top mx-0 px-0">
                <Link to="/">
                    <img
                        src="./assets/logo.png"
                        alt="pokemon"
                        className="w-25 rounded mx-auto d-block py-3"
                    ></img>
                </Link>
            </header>
        </>
    );
};
