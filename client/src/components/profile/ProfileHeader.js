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
          <h1>{profile.user.firstname}{profile.user.lastname}</h1>
          <p>{profile.title}</p>
          <p>{profile.tagline}</p>
          <p>{profile.skills}</p>

          <p><a href={profile.linkedin}>{profile.linkedin}</a></p>
          <p><a href={profile.github}>{profile.github}</a></p>
          <p><a href={profile.dribble}>{profile.dribble}</a></p>
          <p><a href={profile.personalwebsite}>{profile.personalwebsite}</a></p>
          <p><a href={profile.languages}>{profile.languages}</a></p>
          <p><a href={profile.other1}>{profile.other1}</a></p>
          <p>{profile.heroexperience}</p>




          
        </div>
      </div>
    )
  }
}

export default ProfileHeader;
