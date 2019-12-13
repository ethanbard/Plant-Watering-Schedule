import React, {Component} from 'react';
import PlantData from './data/Apprentice_WeGrowInTandem_Data.json';
import logo from './logo.svg';
import './App.css';
import Schedule from './components/Schedule.js'

class App extends Component {

  render() {
    //Import plants from JSON file
    const plants = PlantData;
    
    return (
      <div className="App">
        <h1>Tandem Plant Watering Schedule</h1>
        <Schedule plants={plants} />
      </div>
    );
  }
}

export default App;
