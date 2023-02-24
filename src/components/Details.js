import { Box, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import PropTypes from "prop-types";
import GlobalContext from "../context/GlobalContext";
export const Details = ({
  population,
  countryName,
  region,
  subRegion,
  capital,
  domain,
  currencies,
  languages,
  nativeName,
  alt,
  border,
  src,
}) => {
  const { colorMode } = useContext(GlobalContext);
  console.log(languages, "LANG");
  return (
    <Box className='md:grid grid-cols-2 gap-20 text-detailPage  items-center justify-between'>
      <Box className=''>
        <img src={src} alt={alt} />
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
              <Text as={"span"}> {nativeName}</Text>
            </Text>
            <Text pb={"0.25rem"}>
              <Text as={"span"} fontWeight={"bold"}>
                Population:
              </Text>
              <Text as={"span"}> {population}</Text>
            </Text>
            <Text pb={"0.25rem"}>
              <Text fontWeight={"bold"} as={"span"}>
                Region:
              </Text>
              <Text as={"span"}> {region}</Text>
            </Text>
            <Text pb={"0.25rem"}>
              <Text fontWeight={"bold"} as={"span"}>
                Sub Region:
              </Text>
              <Text as={"span"}> {subRegion}</Text>
            </Text>
            <Text pb={"0.25rem"}>
              <Text fontWeight={"bold"} as={"span"}>
                Capital:
              </Text>
              <Text as={"span"}> {capital}</Text>
            </Text>
          </Box>
          <Box pt={["1.25rem", "0"]}>
            <Text pb={"0.25rem"}>
              <Text fontWeight={"bold"} as={"span"}>
                Top Level Domain:
              </Text>
              <Text as={"span"}> {domain}</Text>
            </Text>
            <Text pb={"0.25rem"}>
              <Text fontWeight={"bold"} as={"span"}>
                Currencies:
              </Text>
              <Text as={"span"}> {currencies}</Text>
            </Text>
            <Text pb={"0.25rem"}>
              <Text fontWeight={"bold"} as={"span"}>
                Languages:
              </Text>
               <Text as={"span"}> {languages?.nativeName}</Text>
            </Text>
          </Box>
        </Box>
        {border && (
          <Box display={"inline-block"}>
            <Text className='font-bold text-[1.15rem] pb-[0.5rem]'>
              Border Countries
            </Text>
            <Flex gap={["0.15rem", "0.5rem", "0.5rem"]} flexWrap={"wrap"}>
              {(border ?? []).map((borders) => {
                return (
                  <Box
                    key={borders}
                    cursor={"pointer"}
                    className={`shadow-md rounded-[4px] px-[0.85rem] md:px-[1.5rem] p-[0.25rem] md:p-[0.5rem] ${
                      colorMode ? "darkElement" : "lightElement"
                    }`}
                  >
                    {borders}
                  </Box>
                );
              })}
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  );
};

Details.propTypes = {
  population: PropTypes.number,
  countryName: PropTypes.string,
  subRegion: PropTypes.string,
  region: PropTypes.string,
  capital: PropTypes.string,
  border: PropTypes.array,
  domain: PropTypes.string,
  currencies: PropTypes.string,
  languages: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  nativeName: PropTypes.string,
};
