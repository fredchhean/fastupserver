import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import {createProfile} from "../../actions/profileActions";
import {withRouter} from "react-router-dom";

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
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors:nextProps.errors})
    }
  }

  onSubmit(e){
    e.preventDefault();
    const profileData = {
      handle: this.state.handle,
      title: this.state.title,
      handle: this.state.handle,
      tagline: this.state.tagline,
      heroexperience: this.state.heroexperience,
      linkedin: this.state.linkedin,
    }
    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const {errors} = this.state;
    return (
      <div>
        <div>
          <div>
            <h1>Create your profile</h1>
            <p>
              Let's get some information for your profile
            </p>
            <small>*required fields</small>
            <form onSubmit={this.onSubmit}>
            <TextFieldGroup
            placeholder="* Profile handle"
            name="handle"
            value={this.state.handle}
            onChange={this.onChange}
            error={errors.handle}
            info="a unique handle for your profile URL ex: fmartin for Frederic Martin"
            />
            <TextFieldGroup
            placeholder="* expertise"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            error={errors.title}
            info="Your expertise as a freelance"
            />
            <TextFieldGroup
            placeholder="* tagline"
            name="tagline"
            value={this.state.tagline}
            onChange={this.onChange}
            error={errors.tagline}
            info="Your slogan as a freelance"
            />
            <TextFieldGroup
            placeholder="* linkedin"
            name="linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
            info="Your slogan as a freelance"
            />  
            <TextAreaFieldGroup
                        placeholder="your heroexperience"
                        name="heroexperience"
                        value={this.state.heroexperience}
                        onChange={this.onChange}
                        error={errors.heroexperience}
                        info="Tell us about a work story you are the most proud of"
            />
            <input
                  type="submit"
                  value="Submit"
                />
            </form>
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

export default connect(mapStateToProps,{createProfile})(withRouter(CreateProfile));
