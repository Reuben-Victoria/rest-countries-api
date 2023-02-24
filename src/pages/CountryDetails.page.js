import { Box, Button, HStack, Icon, Text } from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Details } from "../components/Details";
import useCountryDetails from "../hooks/useCountryDetails";
import GlobalContext from "../context/GlobalContext";
import { Loader } from "../components/loader/Loader";
export const CountryDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { colorMode } = useContext(GlobalContext);
  const { data, isLoading } = useCountryDetails(name);
  const country = (data ?? [])[0];
  console.log(data ?? [], "Data");

  return (
    <Box className='md:px-40 md:h-[calc(100vh-80px)] '>
      {isLoading? (
        <Loader />
      ) : (
        <Box className='p-8'>
          <Box as={"nav"} className='pt-2 pb-12'>
            <Button
              bg={"null"}
              className={`shadow-md ${
                colorMode ? "darkElement" : "lightElement"
              }`}
              onClick={() => navigate(-1)}
            >
              <HStack>
                <Icon as={BsArrowLeft} />
                <Text>Back</Text>
              </HStack>
            </Button>
          </Box>
          <Details
            nativeName={country?.nativeName}
            currencies={country?.currencies[0]?.name}
            src={country?.flags?.svg}
            population={country?.population}
            region={country?.region}
            subRegion={country?.subregion}
            capital={country?.capital}
            border={country?.borders}
            domain={country?.topLevelDomain[0]}
          />
        </Box>
      )}
    </Box>
  );
};
