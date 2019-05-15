import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getCurrentProfile, deleteAccount} from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import {Link} from "react-router-dom";
import ProfileActions from "./ProfileActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e){
    this.props.deleteAccount();

  }

  render() {
    const {user} = this.props.auth;
    const { profile,loading } = this.props.profile;

    let dashboardContent;

    if(profile === null || loading){
      dashboardContent = < Spinner />
    } else {
      //check if logged in user has a profile
      if(Object.keys(profile).length > 0){
        dashboardContent = (
          <div>
          <p>Welcome <Link to={`/profile/${profile.handle}`}>{user.firstname}</Link></p>
          <ProfileActions/>
          <button onClick={this.onDeleteClick.bind(this)}>Delete my account</button>
          </div>
        );
      } else {
        //user is logged in but has no profile
        dashboardContent = (
          <div>
          <p>Welcome {user.firstname}</p>
          <p>You have not set your profile, do it so we can share your profile FASTUP</p>
          <Link to ="/create-profile">          Create a profile
          </Link>
          </div>
        );

      }
    }

    return (
      <div className="dashboard">
        <div className="container">
        <h1>Dashboard</h1>
        {dashboardContent}
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, {getCurrentProfile, deleteAccount})(Dashboard);