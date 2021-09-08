import WeatherBar from './components/WeatherBar';
import './App.css';
import NavbarComp from './components/NavbarComp';
import './components/WeatherBar'
import About from './components/About';
import Footer from './components/Footer';
import FormsComp from './components/FormsComp';

import React, { Component } from 'react'



export default class App extends Component {
  
  render() {
    return (
      <div>
        <div className="App">
          <NavbarComp/>
          <br />
          <WeatherBar/> 
          <br />
          <About/>
          <br />
          <FormsComp/>
          <br />
          <br />
          <Footer/>
        </div>
      </div>
    )
  }
}

