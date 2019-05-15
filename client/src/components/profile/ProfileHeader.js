import React, { Component } from 'react'

class ProfileHeader extends Component {
  render() {
    const {profile} = this.props;
    return (
      <div>
        <h1>Profile Header</h1>
        <div>
          <img src={profile.user.avatar} alt=""/>
        </div>
        <div>
          <h1>{profile.user.lastname}</h1>
          <p>{profile.title}</p>
          <p>{profile.tagline}</p>
          <p><a href={profile.onlinepresence.linkedin}>{profile.onlinepresence.linkedin}</a></p>
          
        </div>
      </div>
    )
  }
}

export default ProfileHeader;
