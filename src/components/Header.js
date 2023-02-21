import { Box, Text, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        as='header'
        className='flex justify-between shadow-lg p-8 md:px-40  bg-white'
      >
        <Text
          onClick={() => {
            navigate("/");
          }}
          className='text-neutral-lightModeText text-[1rem] font-bold md:text-[1.5rem] cursor-pointer'
        >
          Where in the world?
        </Text>
        <HStack>
          <Text>Dark Mode</Text>
        </HStack>
      </Box>
    </Box>
  );
};
