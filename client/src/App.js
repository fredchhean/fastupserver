import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import './App.css';

import Navbar from "./components/layout/navbar/navbar";
import Landing from "./components/layout/landing/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";
import Profiles from "./components/profiles/Profiles";


import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {setCurrentUser,logoutUser} from "./actions/authActions";
import {clearCurrentProfile} from "./actions/profileActions";

import PrivateRoute from "./components/common/PrivateRoute";


//Check for token
if(localStorage.jwtToken){
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decode Token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  //check for expired token
  const currentTime = Date.now()/1000;
  if(decoded.exp < currentTime){
    //logout User
    store.dispatch(logoutUser());
    // todo: clear current profile
    store.dispatch(clearCurrentProfile());


    //redirect to login
    window.location.href ="/login";

  }

}


class App extends Component {
  render(){
  return (
    <Provider store={store}>

    <Router>
      <div>
      <Navbar />
      <h1>MY REACT APP</h1>
      <Route exact path="/" component={Landing}/>
      <div className="container">
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profiles" component={Profiles}/>
        
        <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        </Switch>

        <Switch>
        <PrivateRoute exact path="/create-profile" component={CreateProfile}/>

        </Switch>
        <Switch>
        <PrivateRoute exact path="/edit-profile" component={EditProfile}/>
        </Switch>

      </div>
      </div>
    </Router>
    </Provider>
  );
}
}

export default App;
