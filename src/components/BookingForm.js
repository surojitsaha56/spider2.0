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
           
              <div class="row">
          <div class="input-field col s6">
          <input  type="date" class="validate"/>
          </div>
          <div class="input-field col s6">
          <input  type="date" class="validate"/>
          
              </div>
        
        
               </div>
               <button type="button">Book</button>

                </div>
              </center>
                </div>
            </div>

        )
    }
}
 
export default BookingForms;