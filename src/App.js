import logo from "./logo.svg";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavigationBar from "./navbar/NavigationBar.js";
import Footer from "./footer/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
