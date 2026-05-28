import {BrowserRouter, Router, Route} from "react-router-dom";
import {CustomersPage} from "./pages/CustomersPage.jsx";
import {CustomersFormPage} from "./pages/CustomersFormPage.jsx";

export function App() {
    return (

        <BrowserRouter>
            <CustomersPage />
        </BrowserRouter>
    )
}