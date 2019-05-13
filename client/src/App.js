import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import './App.css';

import Navbar from "./components/layout/navbar/navbar";
import Landing from "./components/layout/landing/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import store from "./store";




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

      </div>
      </div>
    </Router>
    </Provider>
  );
}
}

export default App;
