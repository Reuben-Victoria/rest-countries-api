import { Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { CountryDetails } from "../pages/CountryDetails.page";
import { Home } from "../pages/Home.page";
export const Router = () => {
  return (
    <Box>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='country-details/:name' element={<CountryDetails/>} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};
