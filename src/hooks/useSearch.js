import { useState } from "react";
import { useQuery } from "react-query";
import { fetchSearchData } from "../api/fetchData";
import { useDebounce } from "./useDebounce";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const inputData = useDebounce(search, 1000);

  const searchData = useQuery(["search", inputData], () =>
    fetchSearchData({ inputData })
  );
  const displaySearchData = searchData.data;
  return {
    search,
    setSearch,
    searchData,
    displaySearchData,
    inputData,
  };
};
