 import React, { Component } from 'react'

 export default class NavbarComp extends Component {
     render() {
         return (
            
         <div className="App">
     <nav>
     <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
       <div className="container">
          <ul id="nav-mobile" class="right hide-on-med-and-down">
             <li><a href="#">Signup</a></li>
             <li><a href="#">Booking</a></li>
             <li><a href="#">Weather</a></li>
             <li><a href="#">About</a></li>
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
