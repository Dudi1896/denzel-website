import React from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../global.js";
import { theme } from "../../theme.js";
import Header from "../../components/Header/Header";
import { Footer, Section } from "../../components/index.js";
import { HomeObjOne } from "../../components/Cards/data.js";

const Blogs = () => {

  return (
      <div>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <Section {...HomeObjOne}/>
          <Footer />
        </ThemeProvider>
      </div>
  );
};

export default Blogs;
