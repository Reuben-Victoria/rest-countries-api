import { Select, Box } from "@chakra-ui/react";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
export const FilterOption = () => {
  const { colorMode } = useContext(GlobalContext);
  return (
    <Box
      className={`w-[50%] md:w-[20%] border-none outline-none mt-[3rem]  ${
        colorMode ? "darkElement" : "lightElement"
      }  md:mt-[0]`}
    >
      <Select
        size={["md", "md", "lg"]}
        placeholder={"Filter by Region"}
        className={`rounded-lg shadow-sm text-[homePageItems]  ${
          colorMode ? "darkElement" : "light"
        }  outline-none border-none`}
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
