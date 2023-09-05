import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayAll from "./pages/DisplayAll";
import { PagenationContext } from "./contexts/PagenationContextProvider";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DisplayAll />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
