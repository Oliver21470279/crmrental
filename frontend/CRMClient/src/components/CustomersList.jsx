import {useEffect, useState } from "react";
import {getAllCustomers} from "../api/customer.api.js";

export function CustomersList() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        async function loadCustomers() {
            const res = await getAllCustomers();
            setCustomers(res.data);
            console.log(res);
        }
        loadCustomers();
    }, []);

    return <div>{getAllCustomers()}</div>;
}
