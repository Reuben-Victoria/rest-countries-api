import { useQuery } from "react-query";
import { fetchAllCountries } from "../api/fetchData";

export const useCountries = () => {
 return useQuery("country", fetchAllCountries);
};

