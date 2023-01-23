import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const List = lazy(() => import("../pokemonsList/pokemonsList"));
const Details = lazy(() => import("../details/details"));

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="pokemons">
                    <Route index element={<List></List>}></Route>
                    {/* <Route path=":id" element={<Details></Details>}></Route> */}
                    <Route path=":name" element={<Details></Details>}></Route>
                </Route>
                <Route path="" element={<List></List>}></Route>
                <Route path="*" element={<List></List>}></Route>
            </Routes>
        </Suspense>
    );
}
