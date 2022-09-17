import React, { useRef } from "react";
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import useScrollSnap from "react-use-scroll-snap";
import About from "./components/About"

function App() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  return (
    <div>
      <div ref={scrollRef}>
        <Header />
        <Home />
        <About/>
        <About/>
      </div>
    </div>
  );
}

export default App;
