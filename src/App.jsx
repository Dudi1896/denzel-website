import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MyWork from "./Pages/MyWork";
import Blogs from "./Pages/Blogs";
import Resume from "./Pages/Resume";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/MyWork" element={<MyWork/>} />
            <Route path="/Blogs" element={<Blogs/>} />
            <Route path="/Resume" element={<Resume/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;