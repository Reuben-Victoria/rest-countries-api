import { axios } from "../services/api";

export const fetchAllCountries = async () => {
  const { data } = await axios.get("all");
  return data;
};

const fetchSingleCountry = async ({ name }) => {
  const  {data}  = await axios.get(`name/${name}`);
  console.log(data, "kkkk")
  return data;
};

export default fetchSingleCountry;
