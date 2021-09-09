import WeatherBar from './components/WeatherBar';
import './App.css';
import NavbarComp from './components/NavbarComp';
import './components/WeatherBar'
import About from './components/About';
import Footer from './components/Footer';
import React, { Component } from 'react'
import BookingForms from './components/BookingForm.js';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <div className="App">
         
          
          <BookingForms/>
          <br/>
          <WeatherBar/> 
          <br />
          <About/>
          <br />
         
          <br />
          <br />
          <Footer/>
        </div>
      </div>
    )
  }
}

