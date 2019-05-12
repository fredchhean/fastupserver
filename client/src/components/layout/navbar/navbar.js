import React, {Component} from 'react';
import "./navbar.css";

class Navbar extends Component {
  render() {
    return(
    <div>
        <nav>
    <a href="/">Home</a>
    <a href="/news">News</a>
    <a href="/stories">Stories</a>
    <a href="/discover">Discover</a>
    <a href="/articles_dashboard">art_dash</a>
    <span className="register">
      <a href="/login">Login</a>
      <a href="/profile">Your profile / Log out</a>
    </span>
  </nav>
    </div>
)
  }
}

export default Navbar;