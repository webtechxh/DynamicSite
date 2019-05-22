import React from 'react';

function Registerteam() {
  return (
    <div class="container">
          <div class="row centered-form justify-content-center my-5">
          <div class="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
          	<div class="panel panel-default">
          		<div class="panel-heading">
  			    		<h3 class="panel-title">Register your team</h3>
  			 			</div>
  			 			<div class="panel-body">
  			    		<form role="form">
  			    			<div class="row">
  			    				<div class="col-xs-6 col-sm-6 col-md-6">
  			    					<div class="form-group">
                        <input type="text" name="captain" id="captain" class="form-control input-sm" placeholder="Team Captain"/>
  			    					</div>
  			    				</div>
  			    				<div class="col-xs-6 col-sm-6 col-md-6">
                      <input type="text" name="sport" id="sport" class="form-control input-sm" placeholder="Sport"/>
  			    					<div class="form-group">
  			    					</div>
  			    				</div>
  			    			</div>

                  <input type="text" name="team_name" id="team_name" class="form-control input-sm" placeholder="Team Name"/>
  			    			<div class="form-group">
  			    			</div>

  			    			<div class="row">
  			    				<div class="col-xs-6 col-sm-6 col-md-6">
  			    					<div class="form-group">
                        <input type="text" name="location" id="location" class="form-control input-sm" placeholder="Location"/>
  			    					</div>
  			    				</div>
  			    				<div class="col-xs-6 col-sm-6 col-md-6">
  			    					<div class="form-group">
  			    						<input type="email" name="email" id="email" class="form-control input-sm" placeholder="Email Address"/>
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

export default Registerteam;
