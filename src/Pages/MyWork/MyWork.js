import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../global";
import { theme } from "../../theme";
import Header from "../../components/Header/Header";
import { Welcome } from "../../components";
import { Section } from "../../components"
import About from "../../components/About/About";
import { WorkObjOne } from "./Data";
import { Tester } from "../../components/About/Data";
import CardGrid from "../../components/Cards/CardGrid";

const MyWork = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <Section {...WorkObjOne}/>
          {/* <Welcome /> */}
          <About {...Tester} />
          <CardGrid/>
      </ThemeProvider>
    </div>
  );
};

export default MyWork;
