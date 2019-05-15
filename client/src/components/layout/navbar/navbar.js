import React, {Component} from 'react';
import "./navbar.css";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { logoutUser} from "../../../actions/authActions";
import { clearCurrentProfile } from "../../../actions/profileActions";

class Navbar extends Component {
  onLogoutClick(e){
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
  render() {
    const {isAuthenticated, user} = this.props.auth;
    const authLinks = (
      <nav>
        <Link to="/" className="navlink">Home</Link>
        <Link to="/profiles" className="navlink">FastLancers</Link>
        <Link to="/dashboard" className="navlink">Dashboard</Link>
        <a href="" onClick={this.onLogoutClick.bind(this)}>< img src={user.avatar} width="30" height="30" alt={user.firstname} title="you don't have and image"/>Logout</a>
    </nav>
      
    );

    const guestLinks = (
      <nav>
      <Link to="/" className="navlink">Home</Link>
      <Link to="/profiles" className="navlink">FastLancer Profiles</Link>

      <Link to="/login" className="navlink">Login</Link>
      <Link to="/register" className="navlink">Register</Link>

    </nav>
      
    );

    return(
    <div>

  {isAuthenticated ? authLinks : guestLinks }
    </div>
)
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logoutUser, clearCurrentProfile})(Navbar);