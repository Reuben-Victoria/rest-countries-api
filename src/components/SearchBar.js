import { FormControl } from "@chakra-ui/react";
export const SearchBar = () => {
  return (
    <FormControl className='w-full md:w-[30%]'>
      <input
        type={"text"}
        className='borderBox'
        placeholder={"Search for a country..."}
      />
    </FormControl>
  );
};
