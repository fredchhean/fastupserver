import React, { Component } from 'react';
import axios from "axios";

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
    axios.post("http://localhost:8000/api/users/register", newUser)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.onSubmit}>
        <div>
        <label> last name
        <input type="lastname" placeholder="last name" name="lastname" value={this.state.lastname}
        onChange={this.onChange}/>
        </label>
        </div>
        <div>
        <label>first name

        <input type="firstname" placeholder="first name" name="firstname" value={this.state.firstname}
        onChange={this.onChange}/>
        </label>
                </div>
                <div>
                <label>avatar

        <input type="avatar" placeholder="avatar name" name="avatar" value={this.state.avatar}
        onChange={this.onChange}/>
                </label>

                        </div>
                        <div>
                        <label>email



        <input type="email" placeholder="email" name="email" value={this.state.email}
        onChange={this.onChange}/>
                        </label>

                                </div>
                                <div>
                                <label>Password


        <input type="password" placeholder="password" value={this.state.password} name="password"
        onChange={this.onChange}/>
                                </label>

                                        </div>

        <input type="submit"/>
        </form>

      </div>
    )
  }
}

export default Register;