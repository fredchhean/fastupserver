import React, {Component} from 'react';
import "./navbar.css";
import {Link} from "react-router-dom";

class Navbar extends Component {
  render() {
    return(
    <div>
        <nav>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
  </nav>
    </div>
)
  }
}

export default Navbar;