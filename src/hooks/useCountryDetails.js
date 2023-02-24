import { useQuery } from "react-query";
import fetchSingleCountry from "../api/fetchData";

const useCountryDetails = (name) => {
    return useQuery(["country", name], fetchSingleCountry({name}));
   };

export default useCountryDetails;