import { FormControl } from "@chakra-ui/react";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
export const SearchBar = () => {
  const {colorMode} = useContext(GlobalContext);
  return (
    <FormControl className={`w-full md:w-[30%] ${colorMode ? "darkElement" : "light"}`}>
      <input
        type={"text"}
        placeholder={"Search for a country..."}
        className={`borderBox ${colorMode ? "darkElement" : "light"}`}
      />
    </FormControl>
  );
};
