import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../global.jsx";
import { theme } from "../../theme.jsx";
import { Welcome } from "../../components";

const Home = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Welcome />
      </ThemeProvider>
    </div>
  );
};

export default Home;
