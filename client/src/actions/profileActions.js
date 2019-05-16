import axios from "axios";

import { GET_PROFILE, GET_PROFILES, PROFILE_LOADING, GET_ERRORS, CLEAR_CURRENT_PROFILE, SET_CURRENT_USER } from "./types";


const BackEndUrl = process.env.REACT_APP_SERVER_DOMAIN

//Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios.get(`${BackEndUrl}/api/profile`)
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

//Get profile by handle
export const getProfileByHandle = (handle) => dispatch => {
  dispatch(setProfileLoading());
  axios.get(`${BackEndUrl}/api/profile/handle/${handle}`)
    .then(res => 
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
      ).catch (err => 
        dispatch({
          type: GET_PROFILE,
          payload: null
        }))
}


// Create Profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post(`${BackEndUrl}/api/profile`, profileData)
    .then(res => history.push("/dashboard"))
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload : err.response.data
      }))
}

//GET ALL PROFILES
export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
    axios
      .get(`${BackEndUrl}/api/profile/all`)
      .then(res =>
        dispatch({
          type: GET_PROFILES,
          payload: res.data
        })
        )
        .catch(err => 
          dispatch({
            type: GET_PROFILES,
            payload: null
          })
          );
  }


//delete account & profile
export const deleteAccount = () => dispatch => {
  if(window.confirm("Are you sure that you want to delete your account?")){
    axios
      .delete(`${BackEndUrl}/api/profile`)
      .then(res =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        })
        ).catch(err => 
          dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          })
          )
  }
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

