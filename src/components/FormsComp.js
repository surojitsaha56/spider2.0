import React from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';

class FormsComp extends React.Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    
    render() { 
        return (
            <div>
                <div className="container">
                    <div class="input-field col s12">
                        <select>
                            <option value="" disabled>Choose your option</option>
                            
                        </select>
                        <label>Select Source</label>
                    </div>
                    <button>Change</button>
                    <div class="input-field col s12">
                        <select>
                            <option value="" disabled>Choose your option</option>
                            <option value="1">Mumbai</option>
                            <option value="2">Kolkata</option>
                            <option value="3">Chennai</option>
                            
                        </select>
                        <label>Select Destination</label>
                    </div>
                </div> 
            </div>
        )
    }
}
 
export default FormsComp;