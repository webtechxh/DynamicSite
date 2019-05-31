import React from 'react';

class Register extends React.Component {
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
      this.state.password === this.state.confirmPassword &&
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
    fetch("https://localhost:8443/register", {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.first_name + " " + this.state.last_name
      })
    }).then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoading: false,
            regSuccess: result.success
          });
          console.log(result);
          if (this.regSuccess) {
            this.props.history.push("/login");
          }
        },
        (error) => {
          this.setState({
            isLoading: false,
            regSuccess: false
          });
        }
    );
  }


  render()  {
    return (
      <div class="container">
          <div class="row centered-form justify-content-center my-5">
            <div class="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
            	<div class="panel panel-default">
            		<div class="panel-heading">
    			    		<h3 class="panel-title">Sign up for Tournify <small> - It's free!</small></h3>
    			 			</div>
    			 			<div class="panel-body">
    			    		<form onSubmit={this.handleSubmit}>
    			    			<div class="row">
    			    				<div class="col-xs-6 col-sm-6 col-md-6">
    			    					<div class="form-group">
    			                <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            class="form-control input-sm"
                            placeholder="First Name"
                            value={this.state.first_name}
                            onChange={this.handleChange}/>
    			    					</div>
    			    				</div>
    			    				<div class="col-xs-6 col-sm-6 col-md-6">
    			    					<div class="form-group">
    			    						<input
                            type="text"
                            name="last_name"
                            id="last_name"
                            class="form-control input-sm"
                            placeholder="Last Name"
                            value={this.state.last_name}
                            onChange={this.handleChange}/>
    			    					</div>
    			    				</div>
    			    			</div>

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

    			    			<div class="row">
    			    				<div class="col-xs-6 col-sm-6 col-md-6">
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
    			    				</div>
    			    				<div class="col-xs-6 col-sm-6 col-md-6">
    			    					<div class="form-group">
    			    						<input
                            type="password"
                            name="password_confirmation"
                            id="password_confirmation"
                            class="form-control input-sm"
                            placeholder="Confirm Password"
                            value={this.state.password_confirmation}
                            onChange={this.handleChange}/>
    			    					</div>
    			    				</div>
    			    			</div>

    			    			<input type="submit" value="Register" class="btn btn-info btn-block"/>

    			    		</form>
    			    	</div>
    	    		</div>
        		</div>
        	</div>
        </div>
    );
  }
}

export default Register;
