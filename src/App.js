import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "./hooks";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import BgrLogo from "./assets/images/burger.png";
import { Burger, Menu, Navbar, Welcome } from "./components";
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
              {/* <Navbar/> */}
              <Welcome />
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Elementum pulvinar etiam non quam. Sed elementum tempus egestas
              sed sed. In est ante in nibh mauris cursus. Gravida quis blandit
              turpis cursus in hac habitasse. 
              <br></br>
              <br></br>
              Feugiat in fermentum posuere urna
              nec tincidunt praesent. Enim blandit volutpat maecenas volutpat.
              Id eu nisl nunc mi ipsum. Sem fringilla ut morbi tincidunt. A arcu
              cursus vitae congue mauris rhoncus aenean. Velit ut tortor pretium
              viverra suspendisse potenti. Hac habitasse platea dictumst quisque
              sagittis purus sit amet. Nunc mi ipsum faucibus vitae aliquet nec
              ullamcorper sit amet. Et malesuada fames ac turpis egestas.
              Tincidunt tortor aliquam nulla facilisi cras fermentum odio.
              Praesent elementum facilisis leo vel fringilla est ullamcorper.
              Egestas egestas fringilla phasellus faucibus scelerisque eleifend
              donec. Dictum fusce ut placerat orci nulla pellentesque dignissim
              enim. Non odio euismod lacinia at quis risus sed vulputate odio.
              Sit amet mattis vulputate enim nulla aliquet porttitor lacus
              luctus. Risus at ultrices mi tempus imperdiet nulla malesuada
              pellentesque elit. Mauris ultrices eros in cursus turpis massa. A
              scelerisque purus semper eget duis at tellus at. Magnis dis
              <br></br>
              <br></br>
              parturient montes nascetur ridiculus mus mauris vitae ultricies.
              Scelerisque felis imperdiet proin fermentum leo vel orci. Posuere
              morbi leo urna molestie at elementum eu facilisis sed. At lectus
              urna duis convallis. Vulputate dignissim suspendisse in est.
              Nullam vehicula ipsum a arcu cursus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Elementum pulvinar etiam non quam.
              Sed elementum tempus egestas sed sed. In est ante in nibh mauris
              cursus. Gravida quis blandit turpis cursus in hac habitasse.
              Feugiat in fermentum posuere urna nec tincidunt praesent. Enim
              blandit volutpat maecenas volutpat. Id eu nisl nunc mi ipsum. Sem
              fringilla ut morbi tincidunt. A arcu cursus vitae congue mauris
              rhoncus aenean. Velit ut tortor pretium viverra suspendisse
              potenti. Hac habitasse platea dictumst quisque sagittis purus sit
              amet. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit
              amet. Et malesuada fames ac turpis egestas. Tincidunt tortor
              aliquam nulla facilisi cras fermentum odio. Praesent elementum
              facilisis leo vel fringilla est ullamcorper. Egestas egestas
              fringilla phasellus faucibus scelerisque eleifend donec. Dictum
              fusce ut placerat orci nulla pellentesque dignissim enim. Non odio
              euismod lacinia at quis risus sed vulputate odio. Sit amet mattis
              vulputate enim nulla aliquet porttitor lacus luctus. Risus at
              ultrices mi tempus imperdiet nulla malesuada pellentesque elit.
              Mauris ultrices eros in cursus turpis massa. A scelerisque purus
              semper eget duis at tellus at. Magnis dis parturient montes
              <br></br>
              <br></br>
              nascetur ridiculus mus mauris vitae ultricies. Scelerisque felis
              imperdiet proin fermentum leo vel orci. Posuere morbi leo urna
              molestie at elementum eu facilisis sed. At lectus urna duis
              convallis. Vulputate dignissim suspendisse in est. Nullam vehicula
              ipsum a arcu cursus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Elementum pulvinar etiam non quam. Sed
              elementum tempus egestas sed sed. In est ante in nibh mauris
              cursus. Gravida quis blandit turpis cursus in hac habitasse.
              Feugiat in fermentum posuere urna nec tincidunt praesent. Enim
              blandit volutpat maecenas volutpat. Id eu nisl nunc mi ipsum. Sem
              fringilla ut morbi tincidunt. A arcu cursus vitae congue mauris
              rhoncus aenean. Velit ut tortor pretium viverra suspendisse
              potenti. Hac habitasse platea dictumst quisque sagittis purus sit
              amet. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit
              amet. Et malesuada fames ac turpis egestas. Tincidunt tortor
              aliquam nulla facilisi cras fermentum odio. Praesent elementum
              facilisis leo vel fringilla est ullamcorper. Egestas egestas
              fringilla phasellus faucibus scelerisque eleifend donec. Dictum
              fusce ut placerat orci nulla pellentesque dignissim enim. Non odio
              euismod lacinia at quis risus sed vulputate odio. Sit amet mattis
              vulputate enim nulla aliquet porttitor lacus luctus. Risus at
              ultrices mi tempus imperdiet nulla malesuada pellentesque elit.
              Mauris ultrices eros in cursus turpis massa. A scelerisque purus
              semper eget duis at tellus at. Magnis dis parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Scelerisque felis
              imperdiet proin fermentum leo vel orci. Posuere morbi leo urna
              molestie at elementum eu facilisis sed. At lectus urna duis
              convallis. Vulputate dignissim suspendisse in est. Nullam vehicula
              ipsum a arcu cursus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Elementum pulvinar etiam non quam. Sed
              elementum tempus egestas sed sed. In est ante in nibh mauris
              cursus. Gravida quis blandit turpis cursus in hac habitasse.
              Feugiat in fermentum posuere urna nec tincidunt praesent. Enim
              blandit volutpat maecenas volutpat. Id eu nisl nunc mi ipsum. Sem
              fringilla ut morbi tincidunt. A arcu cursus vitae congue mauris
              rhoncus aenean. Velit ut tortor pretium viverra suspendisse
              potenti. Hac habitasse platea dictumst quisque sagittis purus sit
              amet. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit
              amet. Et malesuada fames ac turpis egestas. Tincidunt tortor
              aliquam nulla facilisi cras fermentum odio. Praesent elementum
              facilisis leo vel fringilla est ullamcorper. Egestas egestas
              fringilla phasellus faucibus scelerisque eleifend donec. Dictum
              fusce ut placerat orci nulla pellentesque dignissim enim. Non odio
              euismod lacinia at quis risus sed vulputate odio. Sit amet mattis
              vulputate enim nulla aliquet porttitor lacus luctus. Risus at
              ultrices mi tempus imperdiet nulla malesuada pellentesque elit.
              Mauris ultrices eros in cursus turpis massa. A scelerisque purus
              semper eget duis at tellus at. Magnis dis parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Scelerisque felis
              imperdiet proin fermentum leo vel orci. Posuere morbi leo urna
              molestie at elementum eu facilisis sed. At lectus urna duis
              convallis. Vulputate dignissim suspendisse in est. Nullam vehicula
              ipsum a arcu cursus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Elementum pulvinar etiam non quam. Sed
              elementum tempus egestas sed sed. In est ante in nibh mauris
              cursus. Gravida quis blandit turpis cursus in hac habitasse.
              Feugiat in fermentum posuere urna nec tincidunt praesent. Enim
              blandit volutpat maecenas volutpat. Id eu nisl nunc mi ipsum. Sem
              fringilla ut morbi tincidunt. A arcu cursus vitae congue mauris
              rhoncus aenean. Velit ut tortor pretium viverra suspendisse
              potenti. Hac habitasse platea dictumst quisque sagittis purus sit
              amet. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit
              amet. Et malesuada fames ac turpis egestas. Tincidunt tortor
              aliquam nulla facilisi cras fermentum odio. Praesent elementum
              facilisis leo vel fringilla est ullamcorper. Egestas egestas
              fringilla phasellus faucibus scelerisque eleifend donec. Dictum
              fusce ut placerat orci nulla pellentesque dignissim enim. Non odio
              euismod lacinia at quis risus sed vulputate odio. Sit amet mattis
              vulputate enim nulla aliquet porttitor lacus luctus. Risus at
              ultrices mi tempus imperdiet nulla malesuada pellentesque elit.
              Mauris ultrices eros in cursus turpis massa. A scelerisque purus
              semper eget duis at tellus at. Magnis dis parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Scelerisque felis
              imperdiet proin fermentum leo vel orci. Posuere morbi leo urna
              molestie at elementum eu facilisis sed. At lectus urna duis
              convallis. Vulputate dignissim suspendisse in est. Nullam vehicula
              ipsum a arcu cursus.
            </small>
          </div>
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
