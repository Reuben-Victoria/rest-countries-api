import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";
import { Header } from "../components/Header";
import { CountryDetails } from "../pages/CountryDetails.page";
import { Home } from "../pages/Home.page";
export const Router = () => {
  const { colorMode } = useContext(GlobalContext);
  return (
    <Box className={`font-body  h-[100vh] ${colorMode ? "dark" : "light"}`}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='country-details/:name' element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};
