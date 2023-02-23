import { Box, Button } from "@chakra-ui/react";
import { Details } from "../components/Details";
export const CountryDetails = () => {
  return (
    <Box className='md:px-40 '>
      <Box className='p-8'>
        <Box as={"nav"} className='pt-2 pb-12'>
          <Button className='shadow-md bg-[white]'>Back</Button>
        </Box>
        <Details />
      </Box>
    </Box>
  );
};
