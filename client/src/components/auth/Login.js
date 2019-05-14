import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import classnames from "classnames";
import {loginUser} from "../../actions/authActions";


class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.auth.isAuthenticated){
      this.props.history.push("/dashboard");
    }
    if(nextProps.errors){
      this.setState({errors: nextProps.errors})
    }
  }

  onSubmit(e){
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData)
    // console.log(userData);
    // axios.post("http://localhost:8000/api/users/register", newUser)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
  }



  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  
  render() {
    const {errors} = this.state;

    return (
      <div>
              <h1>login</h1>

        <form onSubmit={this.onSubmit}>
        <div>
        <input type="email" 
        className={classnames("ce que tu veux", {
          "is-invalid": errors.email
        })}
        
        placeholder="email" name="email" value={this.state.email}
        onChange={this.onChange}/>
        {errors.email && (
          <div className="invalid-feedback">{errors.email}</div>
    )}
        </div>
                                <div>


        <input type="password" 
                className={classnames(" que tu veux", {
                  "is-invalid": errors.password
                })}
        placeholder="password" name="password" value={this.state.password} 
        onChange={this.onChange}/>
        {errors.password && (
          <div className="invalid-feedback">{errors.password}</div>
    )}
        

                                        </div>

        <input type="submit"/>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, {loginUser})(Login);