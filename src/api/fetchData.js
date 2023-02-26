import { axios } from "../services/api";

export const fetchAllCountries = async () => {
  const { data } = await axios.get("all");
  return data;
};

export const fetchSingleCountry = async ({ name }) => {
  const { data } = await axios.get(`name/${name}`);
  return data;
};

export const fetchSearchData = async ({inputData}) => {
  const {data} = await axios.get(`name/${inputData}`)
  console.log(inputData, "searchResult>>>>>")
  return data
}
