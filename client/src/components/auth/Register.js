import React, { Component } from 'react';
import PropTypes from 'prop-types';
import{withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {registerUser} from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  constructor(){
    super();
    this.state = {
      lastname:"",
      firstname:"",
      email:"",
      password:"",
      avatar:"",
      errors:{}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({ errors: nextProps.errors });

    }
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    const newUser = {
      lastname: this.state.lastname,
      firstname: this.state.firstname,
      email: this.state.email,
      password: this.state.password,
      avatar: this.state.avatar,
    }
    this.props.registerUser(newUser, this.props.history);
    // axios.post("http://localhost:8000/api/users/register", newUser)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
  }


  render() {
    const {errors} = this.state;
    const {user} = this.props.auth;
    return (
      <div>
       
        <h1>Register</h1>
        <form onSubmit={this.onSubmit}>
        <label>lastname

        <TextFieldGroup
          placeholder="lastname"
          name="lastname"
          type="lastname"
          value={this.state.lastname}
          onChange={this.onChange}
          error={errors.lastname}
        />
                        </label>

        <label>first name
        <TextFieldGroup
          placeholder="firstname"
          name="firstname"
          type="firstname"
          value={this.state.firstname}
          onChange={this.onChange}
          error={errors.firstname}
        />
                </label>

                        <label>email
                        <TextFieldGroup
          placeholder="email"
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.onChange}
          error={errors.email}
        />
                          
                        </label>

                                <div>
                                <label>Password
                                <TextFieldGroup
          placeholder="password"
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.onChange}
          error={errors.password}
        />
                                </label>

                                        </div>

        <input type="submit"/>
        </form>

      </div>
    )
  }
}

Register.propTypes={
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, {registerUser})(withRouter(Register));