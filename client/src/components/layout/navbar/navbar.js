import React, {Component} from 'react';
import "./navbar.css";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { logoutUser} from "../../../actions/authActions";

class Navbar extends Component {
  onLogoutClick(e){
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {
    const {isAuthenticated, user} = this.props.auth;
    const authLinks = (
      <nav>
        <a href="" onClick={this.onLogoutClick.bind(this)}>< img src={user.avatar} alt={user.firstname} title="you don't have and image"/>Logout</a>

    </nav>
      
    );

    const guestLinks = (
      <nav>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
      
    );

    return(
    <div>
        <nav>
    <Link to="/">Home</Link>
  </nav>
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

export default connect(mapStateToProps, {logoutUser})(Navbar);