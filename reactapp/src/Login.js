import React from 'react';
import { Link } from "react-router-dom"

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      regSuccess: true,
      email: "",
      password: "",
      password_confirmation: "",
      first_name: "",
      last_name: ""
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.isLoading === false
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    fetch("https://localhost:8443/authenticate", {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    }).then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoading: false,
            regSuccess: result.success
          });
          console.log(result);
        },
        (error) => {
          this.setState({
            isLoading: false,
            regSuccess: false
          });
        }
    );
  }

  render() {
    return (
      <div class="container">
        <div class="row justify-content-center my-5">
          <form class="form-signin mg-btm" onSubmit={this.handleSubmit}>
            <h3 class="heading-desc">	Login to Tournify</h3>
              <div class="social-box my-3">
                <div class="row mg-btm my-3">
                   <div class="col-md-12">
                      <a href="#" class="btn btn-primary btn-block">
                        <i class="icon-facebook"></i>    Login with Facebook</a>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                          <a href="#" class="btn btn-info btn-block" >
                            <i class="icon-twitter"></i>    Login with Twitter</a>
                      </div>
                    </div>
              </div>
              <div class="main">
              <div class="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="form-control input-sm"
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={this.handleChange}/>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="form-control input-sm"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}/>
              </div>
              Not yet a member?
              <Link to="/register"> Register here</Link>
              <span class="clearfix"></span>
                  </div>
              <div class="login-footer my-3">
              <div class="row">
                <div class="col-xs-6 col-md-6">
                  <div class="left-section">
                    <a href="">Forgot your password?</a>
                  </div>
                </div>
                  <div class="col-xs-6 col-md-6 pull-right">
                    <button type="submit" class="btn btn-large btn-danger pull-right">Login</button>
                  </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
