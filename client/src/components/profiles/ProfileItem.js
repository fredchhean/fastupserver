import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const {profile} = this.props;
    return (
      <div>
        <div>
          <div>
            <img src={profile.user.avatar}
            alt="profile-image"/>
          </div>
          <div>
            <h3>
              {profile.user.firstname}
            </h3>
            <p>{profile.title} {isEmpty(profile.title) ? null : (<span>{profile.title}</span>)}</p>
            <Link to={`/profile/${profile.handle}`}>
            View Profile
            </Link>
          </div>
          <h4>Skills</h4>
          <ul>
            {profile.skills.slice(0,10). map((skill, index) => (
              <li key={index}>
              {skill}
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    )
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileItem;
