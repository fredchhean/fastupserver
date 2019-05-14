import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import TextFieldGroup from "../common/TextFieldGroup";

class CreateProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle:"",
      title:"",
      tagline:"",
      linkedin: "",
      github: "",
      dribble: "",
      personalwebsite: "",
      other1: "",
      other2: "",
      other3: "",
      errors: {},
    }
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <h1>Create your profile</h1>
            <p>
              Let's get some information for your profile
            </p>
            <small>*required fields</small>
          </div>
        </div>
      </div>
    )
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
})

export default connect(null)(CreateProfile);
