import React from 'react';
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div>
      <Link to="/edit-profile">
      edit profile
      </Link>
    </div>
  )
}

export default ProfileActions;
