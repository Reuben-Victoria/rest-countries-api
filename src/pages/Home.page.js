import { Box } from "@chakra-ui/react";
import { CountryCard } from "../components/CountryCard";
import { FilterOption } from "../components/FilterOption";
import { SearchBar } from "../components/SearchBar";
import { useCountries } from "../hooks/useCountries";

export const Home = () => {
  const { data } = useCountries();
  console.log(data, "Data>>>>");
  return (
    <Box className='text-[ lightModeText]'>
      <Box className='p-8 md:px-40 '>
        <Box className='md:flex items-center justify-between gap-8 md:pb-14 md:pt-8'>
          <Box className='md:w-[50%]'>
            <SearchBar />
          </Box>
          <FilterOption />
        </Box>

        <Box className='p-4 md:p-[0] grid grid-cols-1 gap-[2.5rem] md:grid-cols-4'>
          {data?.map((country, i) => {
            return (
              <CountryCard
                key={i}
                name={country?.name?.common}
                population={country?.population}
                region={country?.region}
                capital={country?.capital?.[0]}
                src={country?.flags?.svg}
                alt={country?.flags?.alt}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
