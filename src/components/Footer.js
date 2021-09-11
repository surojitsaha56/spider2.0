import React, { Component } from 'react'
import './Footer.css';

class Footer extends React.Component {
    render() { 
        return (
            <footer class="page-footer  footer1">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Newsletter</h5>
                <p class="grey-text text-lighten-4">You can subscribe to our newsletter for latest offers and deals.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Sign up</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Book a Flight</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Famous destinations</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">About</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2021 Copyright SpiderFlight. All rights reserved
            </div>
          </div>
        </footer>
            
        )
    }
}
 
export default Footer;