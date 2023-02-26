import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { CountryCard } from "../components/CountryCard";
import { FilterOption } from "../components/FilterOption";
import { Loader } from "../components/loader/Loader";
import { SearchBar } from "../components/SearchBar";
import SearchLoader from "../components/searchLoader/SearchLoader";
import { useCountries } from "../hooks/useCountries";
import { useSearch } from "../hooks/useSearch";

export const Home = () => {
  const { isLoading, data } = useCountries();
  const { search, displaySearchData, searchData, setSearch } = useSearch();
  const [select, onSelectChange] = useState("");

  const { isFetching, error, isError } = searchData;

  const filterOption = data?.filter((country) => country?.region === select);

  return (
    <Box className='text-[ lightModeText] h-[100%]'>
      <Box className='p-8 md:px-40 '>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Box className='md:flex items-center justify-between gap-8 md:pb-14 md:pt-8'>
              <Box className='md:w-[50%]'>
                <SearchBar search={search} setSearch={setSearch} />
              </Box>
              <FilterOption select={select} onSelectChange={onSelectChange} />
            </Box>
            <Box className='p-4 md:p-[0] grid grid-cols-1 gap-[2.5rem] md:grid-cols-4'>
              {search === "" ? (
                select ? (
                  filterOption.map((country, i) => {
                    return (
                      <CountryCard
                        key={i}
                        name={country?.name}
                        population={country?.population}
                        region={country?.region}
                        capital={country?.capital}
                        src={country?.flags?.svg}
                        alt={country?.flags?.alt}
                      />
                    );
                  })
                ) : (
                  data?.map((country, i) => {
                    return (
                      <CountryCard
                        key={i}
                        name={country?.name}
                        population={country?.population}
                        region={country?.region}
                        capital={country?.capital}
                        src={country?.flags?.svg}
                        alt={country?.flags?.alt}
                      />
                    );
                  })
                )
              ) : isFetching ? (
                <Box className=' justify-center items-center w-[80vw]'>
                  <SearchLoader />
                </Box>
              ) : (
                (displaySearchData ?? []).map((country, i) => {
                  return (
                    <CountryCard
                      key={i}
                      name={country?.name}
                      population={country?.population}
                      region={country?.region}
                      capital={country?.capital}
                      src={country?.flags?.svg}
                      alt={country?.flags?.alt}
                    />
                  );
                })
              )}
              {search !== "" && isError && (
                <Box className='h-[80vh] justify-center items-center md:w-[400px] font-bold text-[1.15rem] pb-[0.5rem]'>
                  <Text>No Country as such exists!</Text>
                  <Text>Please enter another Country's name!</Text>
                </Box>
              )}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
