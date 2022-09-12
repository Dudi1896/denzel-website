import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "../../Hooks/hooks.js";
import { GlobalStyles } from "../../global.js";
import { theme } from "../../theme.js";
import { Burger, Menu, Navbar, Welcome } from "../../components";
import FocusLock from "react-focus-lock";
import useSticky from "../../Hooks/useSticky.js";

const Home = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));
  const { isSticky, element } = useSticky();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <div ref={node}>
            <FocusLock disabled={!open}>
              <Navbar sticky={isSticky} />
              <Welcome element={element} />
              <Burger sticky={isSticky} open={open} setOpen={setOpen} aria-controls={menuId}/>
              <Menu sticky={isSticky} open={open} setOpen={setOpen} id={menuId}/>
            </FocusLock>
          </div>
        </>
      </ThemeProvider>
    </div>
  );
};

export default Home;
