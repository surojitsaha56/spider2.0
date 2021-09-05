import './App.css';
import './components/WeatherBar'
import WeatherBar from './components/WeatherBar';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1>Spider 2.0</h1>
      <WeatherBar/>
      <br />
      <About/>
      <br />
      <Footer/>
    </div>
  );
}

export default App;
