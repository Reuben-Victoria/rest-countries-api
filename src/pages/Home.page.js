import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { CountryCard } from "../components/CountryCard";
import { FilterOption } from "../components/FilterOption";
import { Loader } from "../components/loader/Loader";
import { SearchBar } from "../components/SearchBar";
import { useCountries } from "../hooks/useCountries";

export const Home = () => {
  const { isFetching, data } = useCountries();
  const [select, onSelectChange] = useState("");

  const filterOption = data?.filter((country) => country?.region === select);
  console.log(isFetching, "isFetching>>>")

  return (
    <Box className='text-[ lightModeText]'>
      <Box className='p-8 md:px-40 '>
        {isFetching ? (
          <Loader />
        ) : (
          <>
            <Box className='md:flex items-center justify-between gap-8 md:pb-14 md:pt-8'>
              <Box className='md:w-[50%]'>
                <SearchBar />
              </Box>
              <FilterOption select={select} onSelectChange={onSelectChange} />
            </Box>

            <Box className='p-4 md:p-[0] grid grid-cols-1 gap-[2.5rem] md:grid-cols-4'>
              {select
                ? filterOption.map((country, i) => {
                    return (
                      <CountryCard
                        key={i}
                        name={country?.name}
                        population={country?.population}
                        region={country?.region}
                        capital={country?.capital?.[0]}
                        src={country?.flags?.svg}
                        alt={country?.flags?.alt}
                      />
                    );
                  })
                : data?.map((country, i) => {
                    return (
                      <CountryCard
                        key={i}
                        name={country?.name}
                        population={country?.population}
                        region={country?.region}
                        capital={country?.capital?.[0]}
                        src={country?.flags?.svg}
                        alt={country?.flags?.alt}
                      />
                    );
                  })}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
