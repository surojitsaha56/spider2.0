import React, { Component } from 'react';

import './About.css'

class About extends React.Component {
    render() { 
        return (
        <div>
            <section class="about">
                <h3>About Us</h3>
            
            <div class="container">
                <div class="row">
                    <div class="col s12 l4 m6">
                       <div class="card c1">
                        <h5>Book flights directly with Spider flight</h5>
                        <p>Make spider flight your travel companion. You can enjoy the lowest booking and cancellation
                        fees, exclusive flight offers and discounts if you directly book flight with us.</p>
                    </div>
                    </div>
                    <div class="col s12 l4 m6">
                       <div class="card c1">
                        <h5>Book domestic and international flights</h5>
                        <p>You can choose from our domestic flights to 50 destinations in India and upto 20
                        destinations in international flights.</p>
                    </div>
                    </div>
                    <div class="col s12 l4 m6">
                        <div class="card c1">
                        <h5>What's new!</h5>
                        <p class="whats-new"><br></br>Add ons are introduced for smooth experience. You can also check weather for
                        next week</p>
                    </div>
                    </div>
                </div>
                
            </div>
            </section>
        </div>
        )
    }
}

export default About;