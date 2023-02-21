import { Select, Box } from "@chakra-ui/react";

export const FilterOption = () => {
  return (
    <Box className='w-[50%] md:w-[20%] border-none outline-none bg-[white] mt-[3rem] md:mt-[0] '>
      <Select
        size={["md", "md", "lg"]}
        placeholder={"Filter by Region"}
        className=' rounded-lg shadow-sm text-[homePageItems] outline-none border-none'
      >
        <option value='Africa'>Africa</option>
        <option value='America'>America</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
      </Select>
    </Box>
  );
};
