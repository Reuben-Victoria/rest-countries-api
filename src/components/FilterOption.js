import { Select, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
export const FilterOption = ({select, onSelectChange}) => {
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
        value={select}
        onChange={(e) => onSelectChange(e.target.value)}
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

FilterOption.propTypes = {
  select: PropTypes.string,
  onSelectChange: PropTypes.func
}
