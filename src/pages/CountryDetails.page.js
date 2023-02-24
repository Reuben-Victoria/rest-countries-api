import { Box, Button } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { Details } from "../components/Details";
import useCountryDetails from "../hooks/useCountryDetails";
export const CountryDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { data } = useCountryDetails(name);
  console.log(data, "Data");
  return (
    <Box className='md:px-40 md:h-[calc(100vh-80px)] '>
      <Box className='p-8'>
        <Box as={"nav"} className='pt-2 pb-12'>
          <Button className='shadow-md bg-[white]' onClick={() => navigate(-1)}>
            Back
          </Button>
        </Box>
        <Details />
      </Box>
    </Box>
  );
};
