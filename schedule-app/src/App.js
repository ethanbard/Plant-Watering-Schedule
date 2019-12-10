import React, {Component} from 'react';
import PostData from './data/Apprentice_WeGrowInTandem_Data.json';
import logo from './logo.svg';
import './App.css';
import Schedule from './components/Schedule.js'

class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="App">
        <h1>Tandem Plant Watering Schedule</h1>
        <Schedule />
      </div>
    );
  }
}

export default App;
