import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {PropTypes} from "prop-types";
import {connect} from "react-redux";
import "./Landing.css";
import ImageRocket from "./image/rocket.jpg";
import Galaxy from "../../../img-for-landing/galaxy.png"




class Landing extends Component {
  render() {
    return (
      <div>
      <div className="top-container">
      <div className="desclanding">
      {/* <p>Lorem ipsum dolor sit,</p>
      <p>amet consectetur adipisicing elit.</p>
        Cum, tempora ipsa quo temporibus veniam minima soluta quasi facilis? */}
        {/* <img src={Galaxy} className="rocket"/> */}
        </div>

      </div>
      <Link to="/login" className="button-landing">login</Link>
    <Link to="/register" className="button-landing">sign up</Link>
      </div>
    )
  }
}

export default Landing;