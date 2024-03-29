import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, MyWork, Blogs, Resume } from "./Pages";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/MyWork" element={<MyWork/>} />
            <Route path="/Blogs" element={<Blogs/>}  />
            <Route path="/Resume" element={<Resume/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;