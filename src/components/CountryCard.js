import PropTypes from "prop-types";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { Box, Text } from "@chakra-ui/react";
export const CountryCard = ({ population, name, region, capital }) => {
  const {colorMode} = useContext(GlobalContext);
  return (
    <Box
      className={`rounded-lg  md:w-[400px] shadow-md overflow-hidden ${
        colorMode ? "darkElement" : "light"
      }`}
    >
      <Box>
        <img src='https://flagcdn.com/as.svg' alt='Country flag' />
      </Box>
      <Box className='p-8'>
        <Text className='text-[1.25rem] font-extrabold pb-4' as='h3'>
          {name}
        </Text>
        <Box className='pb-2 text-[1rem]'>
          <Text as={"span"} className=' font-bold'>
            Population:
          </Text>
          <Text as={"span"}>{population}</Text>
        </Box>
        <Box className='text-[1rem] pb-2'>
          <Text className='font-bold' as={"span"}>
            Region:
          </Text>
          <Text as={"span"}> {region}</Text>
        </Box>
        <Box className='text-[1rem]'>
          <Text className='font-bold' as={"span"}>
            Capital:
          </Text>
          <Text as={"span"}> {capital}</Text>
        </Box>
      </Box>
    </Box>
  );
};

CountryCard.propTypes = {
  population: PropTypes.string,
  name: PropTypes.string,
  region: PropTypes.string,
  capital: PropTypes.string,
};
