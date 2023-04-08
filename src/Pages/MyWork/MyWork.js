import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../global";
import { theme } from "../../theme";
import Header from "../../components/Header/Header";
import { Cards, Footer, Welcome } from "../../components";
import { Section } from "../../components"
import About from "../../components/About/About";
import { WorkObjOne } from "./Data";
import { Tester } from "../../components/About/Data";
import { HomeObjOne, data } from "../../components/Cards/data";

const MyWork = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          {/* <Section {...WorkObjOne}/> */}
          <About {...Tester} />
          <Cards data={data} {...HomeObjOne}/>
          <Footer />
      </ThemeProvider>
    </div>
  );
};

export default MyWork;
