import { Box, Text } from "@chakra-ui/react";
export const CountryCard = ({population,name, region, capital }) => {
  return (
    <Box className='rounded-lg  md:w-[400px] bg-[white] shadow-md overflow-hidden'>
      <Box>
        <img
          src='https://flagcdn.com/as.svg'
          alt='Country flag'
        />
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
