import bg from '../images/bg-flight.png'

import React from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';
import './BookingForm.css';

class BookingForms extends React.Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    
    render() { 
      
      
        return (
            <div>
        <section class="hero">

        <section class="nav">
        <div className="App navlink sideout">
          <nav>
          <a href="/" data-target="slide-out" class="sidenav-trigger show-on-large  sideout"><i class="material-icons">menu</i></a>
            <div className="container">
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                  <li><a href="/signup">Signup</a></li>
                  <li><a href="/booking">Booking</a></li>
                  <li><a href="/weather">Weather</a></li>
                  <li><a href="/about">About</a></li>
              </ul>
              <div class="sideout">
              <ul id="slide-out" class="sidenav ">
              <li class="s11"><a href="#item1">Item 1</a></li>
              <li class="s11"><a href="#item2">Item 2</a></li>
              <li class="s11"><a href="#item3">Item 3</a></li>
              </ul>
</div>
            </div>        
          </nav>
      </div>
      </section>
      
                    
                <div className="container">
                <center>
                    
                  <div class="row">
                    
                    <div class="input-field col s14">
                        <select>
                            <option value="" browser-default>Choose your option</option>
                            <option value="1">Mumbai</option>
                            <option value="2">Kolkata</option>
                            <option value="3">Chennai</option>
                            <option value="4">Delhi</option>
                            <option value="5">Pune</option>
                            <option value="6">Hydreabad</option>
                            <option value="7">Ahmdebad</option>
                            <option value="8">Chandigarh</option>
                            <option value="9">Srinagar</option>
                            <option value="10">Gangtok</option>
                            <option value="11">Banglore</option>
                        </select>
                        <label>Select Source</label>
                    </div>
                    <div class="input-field col s14">
                        <select>
                            <option value="" browser-default>Choose your option</option>
                            <option value="1">Mumbai</option>
                            <option value="2">Kolkata</option>
                            <option value="3">Chennai</option>
                            <option value="4">Delhi</option>
                            <option value="5">Pune</option>
                            <option value="6">Hydreabad</option>
                            <option value="7">Ahmdebad</option>
                            <option value="8">Chandigarh</option>
                            <option value="9">Srinagar</option>
                            <option value="10">Gangtok</option>
                            <option value="11">Banglore</option>
                        </select>
                        <label>Select Destination</label>
                        
                    </div>
                    </div>
           
              <div class="row">
          <div class="input-field col s13">
          <input  type="date" class="validate"/>
          </div>
          
          <div class="input-field col s13">
          <input  type="date" class="validate"/>
          
              </div>
        
               </div>
               <button type="button" class="btn1">Book</button>

              </center>
                </div>
                </section>
            </div>

        )
    }
}
 
export default BookingForms;