import axios from "axios";
export const getAllCustomers = () => {
    return axios.get("https://localhost:8000/crm/crm/");
}