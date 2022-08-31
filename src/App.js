import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "./hooks";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import BgrLogo from "./assets/images/burger.png";
import { Burger, Menu, Navbar } from "./components";
import FocusLock from "react-focus-lock";
import { Routes, Route } from "react-router-dom";

const burgerIcon = {
  height: "min(20vmin)",
  display: "block",
  transform: "translateX(-50%, -10%)",
  marginLeft: "auto",
  marginRight: "auto",
  zIndex: "-2",
};

function App() {
  
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
      
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <div ref={node}>
              <FocusLock disabled={!open}>
                <Navbar/>
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <Menu open={open} setOpen={setOpen} id={menuId} />
              </FocusLock>
            </div>
            <div>
              <img src={BgrLogo} style={burgerIcon} alt="Burger Logo" />
              <h1>Hello. This is burger menu tutorial</h1>
              <small>
                Icon made by <a href="https://www.freepik.com/home">Freepik</a>{" "}
                from <a href="https://www.flaticon.com">www.flaticon.com</a>
              </small>
            </div>
          </>
        </ThemeProvider>
      
    </div>
  );
}

export default App;
