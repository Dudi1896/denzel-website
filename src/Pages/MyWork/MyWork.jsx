import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../global.jsx";
import { theme } from "../../theme.jsx";
import Header from "../../components/Header";
import Cards from "../../components/Cards";

const MyWork = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <Cards />
      </ThemeProvider>
    </div>
  );
};

export default MyWork;
