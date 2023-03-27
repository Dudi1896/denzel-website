import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "../../Hooks/hooks.js";
import { GlobalStyles } from "../../global.js";
import { theme } from "../../theme.js";
import { Burger, Menu, Navbar } from "..";
import FocusLock from "react-focus-lock";

const Header = () => {
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
              {/* <Navbar /> */}
              <Navbar open={open} setOpen={setOpen} aria-controls={menuId} />
              {/* <Burger open={open} setOpen={setOpen} aria-controls={menuId} /> */}
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div>
        </>
      </ThemeProvider>
    </div>
  );
};

export default Header;
