import { Box } from "@chakra-ui/react";
import { CountryCard } from "../components/CountryCard";
import { FilterOption } from "../components/FilterOption";
import { SearchBar } from "../components/SearchBar";

export const Home = ({colorMode}) => {
  return (
    <Box className='text-[ lightModeText]'>
      <Box className='p-8 md:px-40 '>
        <Box className='md:flex items-center justify-between gap-8 md:pb-14 md:pt-8'>
          <Box className='md:w-[50%]'>
            <SearchBar />
          </Box>
          <FilterOption />
        </Box>

        <Box className='p-4 md:p-[0]'>
          <CountryCard colorMode={colorMode}/>
        </Box>
      </Box>
    </Box>
  );
};
