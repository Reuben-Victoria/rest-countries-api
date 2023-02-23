import { axios } from "../services/api"

export const fetchAllCountries = async () => {
    const {data} = await axios.get("all");
    return data
}