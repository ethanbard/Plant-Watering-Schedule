import React, {Component} from 'react';
import PostData from './data/Apprentice_WeGrowInTandem_Data.json';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="App">
        <h1>Tandem Plant Watering Schedule</h1>
        {PostData.map((postDetail, index) =>{
          return <h2>Water {postDetail.name} every {postDetail.water_after}</h2>
        })}
      </div>
    );
  }
}

export default App;
