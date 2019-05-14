import axios from "axios";

import { GET_PROFILE, PROFILE_LOADING, GET_ERRORS, CLEAR_CURRENT_PROFILE } from "./types";

//Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading);
  axios.get("http://localhost:8000/api/profile")
    .then(res => 
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
      ).catch (err => 
        dispatch({
          type: GET_PROFILE,
          payload: {}
        }))
}

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post("http://localhost:8000/api/profile", profileData)
    .then(res => history.push("/dashboard"))
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload : err.response.data
      }))
}


//profile loading 
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  }
}

//clear profile 
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  }
}

