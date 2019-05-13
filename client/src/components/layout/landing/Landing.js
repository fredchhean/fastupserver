import React, { Component } from 'react';
import {Link} from "react-router-dom";


class Landing extends Component {
  render() {
    return (
      <div>
        this is the contain for landing page
        <Link to="/login">login</Link>
    <Link to="/register">sign up</Link>
      </div>
    )
  }
}

export default Landing;