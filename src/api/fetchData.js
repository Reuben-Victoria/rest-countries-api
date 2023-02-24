import { axios } from "../services/api";

export const fetchAllCountries = async () => {
  const { data } = await axios.get("all");
  return data;
};

const fetchSingleCountry = async ({ name }) => {
  const  response  = await axios.get(`name/${name}`);
  return response.data;
};

export default fetchSingleCountry;
