import { LoginButton } from "../login/login";
import { SearchBar } from "../search/searchBar";

export function Menu() {
    return (
        <>
            <div className="d-flex justify-content-between py-4 px-4">
                <SearchBar></SearchBar>
                <LoginButton></LoginButton>
            </div>
        </>
    );
}
