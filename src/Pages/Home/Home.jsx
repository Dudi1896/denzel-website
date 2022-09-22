import React, { useRef } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../global.jsx";
import { theme } from "../../theme.jsx";
import { Welcome } from "../../components";
import Header from "../../components/Header";
import useScrollSnap from "react-use-scroll-snap";
import About from "../../components/About";

const Home = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div ref={scrollRef}>
          <GlobalStyles />
          <Header />
          <Welcome />
          <About />
          <About />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Home;
