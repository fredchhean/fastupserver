import React, { Component } from 'react';
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";

import Spinner from "../common/Spinner";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {getProfileByHandle} from "../../actions/profileActions";

class Profile extends Component {
  componentDidMount(){
    if(this.props.match.params.handle){
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  render() {
    const {profile, loading} = this.props.profile;
    let profileContent;

    if( profile === null || loading ){
      profileContent = <Spinner />
    } else {
      profileContent = (
        <div>
          <div>
            <div>
              <Link to="/profiles">
              Back to all profiles
              </Link>
            </div>
          </div>
          <ProfileHeader profile={profile}/>
        <ProfileAbout/>
        </div>
      )
    }


    return (
      <div>
        <div>
          <div>
            <div>
              {profileContent}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, {getProfileByHandle})(Profile);