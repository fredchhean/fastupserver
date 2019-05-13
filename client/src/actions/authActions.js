import {GET_ERRORS} from "./types";
import axios from "axios";


//Register User
export const registerUser = (userData,history) => dispatch => {
      axios
        .post("http://localhost:8000/api/users/register", userData)
        .then(res => history.push('/login'))
        .catch(err => dispatch({
          type: GET_ERRORS,
          payload: err.response.data

        }))

};

// //login - Get User Token
// export const loginUser = userData => dispatch => {
//   axios.post("http://localhost:8000/api/login", userData)
//     .then(res => {

//     })
//     .catch(err => 
//       dispatch({
//       type: GET_ERRORS,
//       payload: err.response.data

//     }){

//     })
// };