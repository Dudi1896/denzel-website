import React, { useRef } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../global.js";
import { theme } from "../../theme.js";
import { Footer, Section, Welcome } from "../../components";
import Header from "../../components/Header/Header";
import useScrollSnap from "react-use-scroll-snap";
import About from "../../components/About/About";
import { HomeObjOne } from "../../components/Cards/data.js";

const Home = () => {
  // const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <div ref={scrollRef}> */}
          <GlobalStyles />
          <Header />
          <Welcome />
          <About />
          <Section {...HomeObjOne}/>
          <About />
          <Footer />
        {/* </div> */}
      </ThemeProvider>
    </div>
  );
};

export default Home;
