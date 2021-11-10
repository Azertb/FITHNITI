import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router',
  template: `
 
 <div class="container" style="background-image: url('assets/img/bg.jpeg');"  >
 
  <section class="section is-large" >
  <div class="container is-grouped is-grouped-left">
    
  </div>
  
</section>
<div id="booking" class="section">
    <div class="section-center">
        <div class="container">
            <div class="row">
                <div class="booking-form">
                    <div class="form-header">
                        <h1>Find a carpooling</h1>
                    </div>
                    <form>
                        
                        <div class="form-group"> <input class="form-control" type="text" placeholder="Country, ZIP, city..."> <span class="form-label">From where</span> </div>
                        <div class="columns">
                            <div class="column ">
                                <div class="form-group"> <input class="form-control" type="date" required> <span class="form-label">Check In</span> </div>
                            </div>
                            <div class="column">
                                <div class="form-group"> <input class="form-control" type="date" required> <span class="form-label">Check out</span> </div>
                            </div>
                        </div>
                        <div class="row">
                           
                            <div class="col-md-6">
                                <div class="form-group"> <select class="form-control" required>
                                        <option value="" selected hidden>no of adults</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select> </div>
                            </div>
                            
                        </div>
                       
                        <div class="form-btn"> <button class="submit-btn">Book Now</button> </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js"></script>
<script>$(document).ready(function(){

$('.statistic-counter').counterUp({
delay: 10,
time: 2000
});


});</script>
<section id="counter" class="counter">
    <div class="main_counter_area">
        <div class="overlay p-y-3">
            <div class="container">
                <div class="row">
                    <div class="main_counter_content text-center white-text wow fadeInUp">
                        <div class="col-md-3">
                            <div class="single_counter p-y-2 m-t-1"> <i class="fa fa-briefcase m-b-1"></i>
                                <h2 class="statistic-counter">200</h2> <span></span>
                                <p>Study</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="single_counter p-y-2 m-t-1"> <i class="fa fa-check m-b-1"></i>
                                <h2 class="statistic-counter">1000</h2>
                                <p>Checked</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="single_counter p-y-2 m-t-1"> <i class="fa fa-coffee m-b-1"></i>
                                <h2 class="statistic-counter">500</h2>
                                <p>Coffee </p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="single_counter p-y-2 m-t-1"> <i class="fa fa-beer m-b-1"></i>
                                <h2 class="statistic-counter">400</h2>
                                <p>Pizzas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  `,
  
  styleUrls: ['my-form.css']
})
export class RouterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
