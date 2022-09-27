import React from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../global.jsx";
import { theme } from "../../theme.jsx";
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
