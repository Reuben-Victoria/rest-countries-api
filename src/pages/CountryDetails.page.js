import { Box, Button } from "@chakra-ui/react";
import { Details } from "../components/Details";
// import { useCountries } from "../hooks/useCountries";
export const CountryDetails = () => {
    // const {data} = useCountries();
  return (
    <Box className='md:px-40 md:h-[calc(100vh-80px)] '>
      <Box className='p-8'>
        <Box as={"nav"} className='pt-2 pb-12'>
          <Button className='shadow-md bg-[white]'>Back</Button>
        </Box>
        <Details />
      </Box>
    </Box>
  );
};
