import React, { Component } from 'react'
import mumbai from '../images/mumbai.jpg'
import london from '../images/london.jpg'
import new_york from '../images/new_york.jpg'
import './WeatherBar.css';

class WeatherBar extends React.Component {

    state={
        days:[
            {'Mumbai':{temperature: '32&deg;C'},'London':{temperature: '22&deg;C'},'New York':{temperature: '12&deg;C'}},
            {'Mumbai':{temperature: '31&deg;C'},'London':{temperature: '21&deg;C'},'New York':{temperature: '11&deg;C'}},
            {'Mumbai':{temperature: '30&deg;C'},'London':{temperature: '20&deg;C'},'New York':{temperature: '10&deg;C'}},
            {'Mumbai':{temperature: '32&deg;C'},'London':{temperature: '22&deg;C'},'New York':{temperature: '12&deg;C'}},
            {'Mumbai':{temperature: '31&deg;C'},'London':{temperature: '21&deg;C'},'New York':{temperature: '11&deg;C'}},
            {'Mumbai':{temperature: '36&deg;C'},'London':{temperature: '23&deg;C'},'New York':{temperature: '14&deg;C'}},
            {'Mumbai':{temperature: '40&deg;C'},'London':{temperature: '11&deg;C'},'New York':{temperature: '10&deg;C'}},
            
        ]
    }
    display = (id) => {
        document.getElementById("M-date").innerHTML = this.state.days[id].Mumbai.temperature;
        document.getElementById("L-date").innerHTML = this.state.days[id].London.temperature;
        document.getElementById("NY-date").innerHTML = this.state.days[id]['New York'].temperature;
    }

    render() { 
        return(
            <div>
                <section class="hero1">
                    <h3>Weather for Next Week</h3>
                <div className="container">
                    <button className="waves-effect waves-light btn secondary btn-large " onClick={() => this.display(0)}>Monday</button>
                    <button className="waves-effect waves-light btn secondary btn-large" onClick={() => this.display(1)}>Tuesday</button>
                    <button className="waves-effect waves-light btn secondary btn-large" onClick={() => this.display(2)}>Wednesday</button>
                    <button className="waves-effect waves-light btn secondary btn-large" onClick={() => this.display(3)}>Thursday</button>
                    <button className="waves-effect waves-light btn secondary btn-large" onClick={() => this.display(4)}>Friday</button>
                    <button className="waves-effect waves-light btn secondary btn-large" onClick={() => this.display(5)}>Saturday</button>
                    <button className="waves-effect waves-light btn secondary btn-large" onClick={() => this.display(6)}>Sunday</button>
                </div>
                <br />
                <div className="row container">
                    <div className="col s12 l4 m6 card hoverable">
                        <br />
                        <div className="card-image">
                            <img src={mumbai} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Mumbai</p>
                        </div>
                        
                        <p id="M-date">32&deg;C</p>
                    </div>
                    <div className="col s12 l4 m6 card hoverable">
                        <br/>
                        <div className="card-image">
                            <img src={london} alt="" />
                        </div>
                        <div className="card-title">
                            <p>London</p>
                        </div>
                        
                        <p id="L-date">22&deg;C</p>
                    </div>
                    <div className="col s12 l4 m6 card hoverable">
                        <br />
                        <div className="card-image">
                            <img src={new_york} alt="" />
                        </div>
                        <div className="card-title">
                            <p>New York</p>
                        </div>
                        
                        <p id="NY-date">12&deg;C</p>
                    </div>
                </div>
                </section>
            </div>
            
        ) 
    }
}
 
export default WeatherBar;