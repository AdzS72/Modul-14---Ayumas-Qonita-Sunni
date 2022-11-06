import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header"; //Include Header
import Footer from "./Footer"; //Include Footer
import Navbar from "./Navbar"; //Include Navbar

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Navbar></Navbar>
        <Outlet />
        <Footer></Footer>
      </div>
    );
  }
}
export default Layout;
