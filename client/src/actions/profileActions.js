import axios from "axios";

import { GET_PROFILE, PROFILE_LOADING, GET_ERRORS } from "./types";

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


//profile loading 
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  }
}