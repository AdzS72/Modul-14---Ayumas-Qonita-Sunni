import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Pages/About"; //Include About
import Body from "./Pages/Body"; //Include Body
import Contact from "./Pages/Contact"; //Include Navbar
import Layout from "./Pages/Layout"; //Include Layout

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Body />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
