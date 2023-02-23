import { Box, HStack, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
export const Details = ({
  population,
  countryName,
  region,
  subRegion,
  capital,
  domain,
  currencies,
  languages,
  nativeName
}) => {
  return (
    <Box className='md:grid grid-cols-2 gap-20 text-detailPage  items-center justify-between'>
      <Box className=''>
        <img src='https://flagcdn.com/as.svg' alt='flags' />
      </Box>
      <Box>
        <Text
          as={"h3"}
          className='text-[1.5rem] font-extrabold pt-[1.25rem] pb-[1.25rem] md:pb-4'
        >
         {countryName}
        </Text>
        <Box className='md:grid grid-cols-2 gap-4 pb-[1.25rem]'>
          <Box>
            <Text pb={"0.25rem"}>
              <Text as={"span"} fontWeight={"bold"}>
                Native Name:
              </Text>
              <Text as={"span"}>{nativeName}</Text>
            </Text>
            <Text pb={"0.25rem"}>
              <Text as={"span"} fontWeight={"bold"}>
                Population
              </Text>
              <Text as={"span"}>{population}</Text>
            </Text>
            <Text pb={"0.25rem"}>
              <Text fontWeight={"bold"} as={"span"}>
                Region:
              </Text>
              <Text as={"span"}>{region}</Text>
            </Text>
            <Text pb={"0.25rem"}>
              <Text fontWeight={"bold"} as={"span"}>
                Sub Region:
              </Text>
              <Text as={"span"}>{subRegion}</Text>
            </Text>
            <Text pb={"0.25rem"}>
              <Text fontWeight={"bold"} as={"span"}>
                Capital:
              </Text>
              <Text as={"span"}>{capital}</Text>
            </Text>
          </Box>
          <Box pt={["1.25rem", "0"]}>
            <Text pb={"0.25rem"}>
              <Text fontWeight={"bold"} as={"span"}>
                Top Level Domain:
              </Text>
              <Text as={"span"}>{domain}</Text>
            </Text>
            <Text pb={"0.25rem"}>
              <Text fontWeight={"bold"} as={"span"}>
                Currencies:
              </Text>
              <Text as={"span"}>{currencies}</Text>
            </Text>
            <Text pb={"0.25rem"}>
              <Text fontWeight={"bold"} as={"span"}>
                Languages:
              </Text>
              <Text as={"span"}>{languages}</Text>
            </Text>
          </Box>
        </Box>
        <Box display={"inline-block"}>
          <Text>Border Countries</Text>
          <HStack>
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

Details.propTypes = {
  population: PropTypes.string,
  countryName: PropTypes.string,
  subRegion: PropTypes.string,
  region: PropTypes.string,
  capital: PropTypes.string,
  domain: PropTypes.string,
  currencies: PropTypes.string,
  languages: PropTypes.string,
  nativeName: PropTypes.string,
}

