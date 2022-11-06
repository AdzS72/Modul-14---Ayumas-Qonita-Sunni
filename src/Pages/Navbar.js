import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
class Navbar extends React.Component {
  render() {
    return (
      <div class="container">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <Link class="nav-link active" href="#" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="#" to="/about">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="#" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
