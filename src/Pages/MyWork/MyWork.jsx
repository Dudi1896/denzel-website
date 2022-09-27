import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../global.jsx";
import { theme } from "../../theme.jsx";
import Header from "../../components/Header";


const MyWork = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
      </ThemeProvider>
    </div>
  );
};

export default MyWork;
