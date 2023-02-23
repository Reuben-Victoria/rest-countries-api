import { Box, Text, HStack, Icon } from "@chakra-ui/react";
import { useContext } from "react";
import { IoIosMoon } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import GlobalContext from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
export const Header = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useContext(GlobalContext);
  return (
    <Box>
      <Box
        as='header'
        className={`flex justify-between shadow-lg p-8 md:px-40 ${
          colorMode ? "darkElement" : "light"
        }`}
      >
        <Text
          onClick={() => {
            navigate("/");
          }}
          className=' text-[1rem] font-bold md:text-[1.5rem] cursor-pointer'
        >
          Where in the world?
        </Text>

        <HStack onClick={toggleColorMode}>
          <Icon as={colorMode ? IoIosMoon : FaMoon} boxSize={[6, 8, 8]} />
          <Text fontWeight={"bold"}>
            {colorMode ? "DarkMode" : "LightMode"}
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};

Header.propTypes = {
  colorMode: PropTypes.bool,
  toggleColorMode: PropTypes.func,
};
