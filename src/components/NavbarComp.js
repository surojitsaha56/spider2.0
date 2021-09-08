import React, { Component } from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';


export default class NavbarComp extends Component {
  componentDidMount() {
   let sidenav = document.querySelector('#slide-out');
   M.Sidenav.init(sidenav, {});}
    render() {
      
        return (
            
        <div className="App">
          <nav>
          <a href="/" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
            <div className="container">
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                  <li><a href="/signup">Signup</a></li>
                  <li><a href="/booking">Booking</a></li>
                  <li><a href="/weather">Weather</a></li>
                  <li><a href="/about">About</a></li>
              </ul>
              <ul id="slide-out" class="sidenav">
              <li><a href="#item1">Item 1</a></li>
              <li><a href="#item2">Item 2</a></li>
              <li><a href="#item3">Item 3</a></li>
              </ul>
            </div>        
          </nav>
      </div>
        )
    }
}
