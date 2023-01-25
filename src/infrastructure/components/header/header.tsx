// import style from "./header.module.css";

export const Header = () => {
    return (
        <>
            {/* <header className={style.header}> */}
            <header className="container-fluid row bg-danger sticky-top mx-0 px-0">
                <img
                    src="./assets/logo.png"
                    alt="pokemon"
                    className="w-25 rounded mx-auto d-block py-3"
                ></img>
            </header>
        </>
    );
};
