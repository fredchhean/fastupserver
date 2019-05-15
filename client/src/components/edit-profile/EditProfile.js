import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import {createProfile, getCurrentProfile} from "../../actions/profileActions";
import {withRouter} from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class CreateProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle:"",
      title:"",
      tagline:"",
      skills:"",
      linkedin: "",
      github: "",
      dribble: "",
      personalwebsite: "",
      other1: "",
      other2: "",
      other3: "",
      heroexperience:"",
      errors: {},
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    this.props.getCurrentProfile();
  }
  
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors:nextProps.errors})
    }
    if(nextProps.profile.profile){
      const profile = nextProps.profile.profile;

      //bring skills array back to csv
      const skillsCSV = profile.skills.join(",");

      //if profile field doesn't exist, make empty string
      profile.title = !isEmpty(profile.title) ? profile.title: "";
      profile.tagline = !isEmpty(profile.tagline) ? profile.tagline: "";
      profile.heroexperience = !isEmpty
      (profile.heroexperience) ? profile.heroexperience: "";
      profile.linkedin = !isEmpty(profile.linkedin) ? profile.linkedin: "";
      profile.dribble = !isEmpty(profile.dribble) ? profile.dribble: "";
      profile.personalwebsite = !isEmpty(profile.personalwebsite) ? profile.personalwebsite: "";
      profile.other1 = !isEmpty(profile.other1) ? profile.other1: "";
      profile.other2 = !isEmpty(profile.other2) ? profile.other2: "";
      profile.other3 = !isEmpty(profile.other3) ? profile.other3: "";

      //set component fields state
      this.setState({
        handle: profile.handle,
        title: profile.title,
        tagline: profile.tagline,
        skills: skillsCSV,
        linkedin: profile.linkedin,
        github: profile.github,
        dribble: profile.dribble,
        personalwebsite: profile.personalwebsite,
        other1: profile.other1,
        other2: profile.other2,
        other3: profile.other3,
        heroexperience: profile.heroexperience,

      })

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
      skills: this.state.skills,
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
            <h1>Edit your profile</h1>

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
            placeholder="* skills"
            name="skills"
            value={this.state.skills}
            onChange={this.onChange}
            error={errors.skills}
            info="Please use comma separated value, ex : html, css, design"
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
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
})

export default connect(mapStateToProps,{createProfile, getCurrentProfile})(withRouter(CreateProfile));
