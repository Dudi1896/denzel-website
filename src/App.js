import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import BgrLogo from './assets/images/burger.png';
import { Burger, Menu } from './components';

const burgerIcon= {
  height: "min(20vmin)",
  display: "block",
  transform: "translateX(-50%)",
  transform: "translateY(-10%)",
  marginLeft: "auto",
  marginRight: "auto",
}


function App() {
  return (
    <div>
       <ThemeProvider theme={theme}> 
         <> 
        <GlobalStyles />
        <Burger />
        <div>
          <img src={BgrLogo} style={burgerIcon} alt="Burger Logo" />
          <h1>Hello. This is burger menu tutorial</h1>
          <small>Icon made by <a href="https://www.freepik.com/home">
          Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
        </div>
        </>
       </ThemeProvider>
    </div>
  );
}

export default App;
