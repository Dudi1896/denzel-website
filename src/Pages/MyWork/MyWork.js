import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../global";
import { theme } from "../../theme";
import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import { Welcome } from "../../components";
import { Section } from "../../components"
import About from "../../components/About/About";
import { WorkObjOne } from "./Data";

const MyWork = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <Section {...WorkObjOne}/>
          {/* <Welcome /> */}
          <About />
          <Cards />
      </ThemeProvider>
    </div>
  );
};

export default MyWork;
