import React, { Component } from 'react'


class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    console.log(user);
    // axios.post("http://localhost:8000/api/users/register", newUser)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
  }



  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  
  render() {
    return (
      <div>
              <h1>login</h1>

        <form onSubmit={this.onSubmit}>
        <div>
        <label>Email
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


export default Login;