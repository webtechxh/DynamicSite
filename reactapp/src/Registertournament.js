import React from 'react';

function Registertournament() {
  return (

      <div class="container">
            <div class="row centered-form justify-content-center my-5">
            <div class="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
            	<div class="panel panel-default">
            		<div class="panel-heading">
    			    		<h3 class="top-padding panel-title"  style={{fontFamily: 'Ranga', fontSize:40}}>Register your tournament</h3>
    			 			</div>
    			 			<div class="top-padding panel-body">
    			    		<form role="form">
    			    			<div class="row">
    			    				<div class="col-xs-6 col-sm-6 col-md-6">
    			    					<div class="form-group">
                          <input type="text" name="organiser" id="organiser" class="form-control input-sm" placeholder="Organiser"/>
    			    					</div>
    			    				</div>
    			    				<div class="col-xs-6 col-sm-6 col-md-6">
                        <input type="text" name="sport" id="sport" class="form-control input-sm" placeholder="Sport"/>
    			    					<div class="form-group">
    			    					</div>
    			    				</div>
    			    			</div>

                    <input type="text" name="tournament_name" id="tournament_name" class="form-control input-sm" placeholder="Tournament Name"/>
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
    			    						<input type="date" name="date" id="date" class="form-control input-sm" placeholder="Tournament Date"/>
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

export default Registertournament;
