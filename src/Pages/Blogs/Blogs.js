import React from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../global.js";
import { theme } from "../../theme.js";
import Header from "../../components/Header";

const Blogs = () => {

  return (
      <div>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
        </ThemeProvider>
      </div>
  );
};

export default Blogs;
