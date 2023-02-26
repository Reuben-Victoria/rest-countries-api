import { HStack, FormControl, Icon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
export const SearchBar = ({search, setSearch  }) => {
  const { colorMode } = useContext(GlobalContext);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <FormControl
      onSubmit={handleSubmit}
      className={`w-full md:w-[30%] flex items-center borderBox ${
        colorMode ? "darkElement" : "lightElement"
      }`}
    >
      <HStack spacing={"1rem"}>
        <Icon as={FaSearch} boxSize={["1.25rem", "1.5rem", "1.5rem"]} />
        <input
          type={"search"}
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          placeholder={"Search for a country..."}
          className={`w-[100%] h-[100%] inline-block rounded-[5px] overflow-hidden border-none outline-none  ${
            colorMode ? "darkElement" : "lightElement"
          }`}
        />
      </HStack>
    </FormControl>
  );
};
