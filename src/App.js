import './App.css';
import NavbarComp from './components/NavbarComp';
import './components/WeatherBar'
import M from  'materialize-css/dist/js/materialize.min.js';
import WeatherBar from './components/WeatherBar';
import React, { Component } from 'react';
import BookingForm from './components/BookingForm.js';
export default class App extends Component {
  componentDidMount() {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});}
  render() {
    return (
      <div>
        <div className="App">
    <NavbarComp/>
    <BookingForm/>
    <WeatherBar/> 
   </div>
      </div>
    )
  }
}

