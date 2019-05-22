import React from 'react';
import { Link } from "react-router-dom"

function Login() {
  return (
    <div class="container">
      <div class="row justify-content-center my-5">
        <form class="form-signin mg-btm">
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
        <input type="text" class="form-control" placeholder="Email" autofocus/>
            <input type="password" class="form-control my-3" placeholder="Password"/>Not yet a member?
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

export default Login;
