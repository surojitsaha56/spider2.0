import './App.css';
import NavbarComp from './components/NavbarComp';
import './components/WeatherBar'
import M from  'materialize-css/dist/js/materialize.min.js';
import WeatherBar from './components/WeatherBar';
// function App() {
//   return (
//  <div className="App">
//    <NavbarComp/>
//     <WeatherBar/> 
//   </div>
//     );

// }
import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount() {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});}
  render() {
    return (
      <div>
        <div className="App">
    <NavbarComp/>
    <WeatherBar/> 
   </div>
      </div>
    )
  }
}

