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
    //Import plants from JSON file
    const plants = PostData;

    //Watering dates array
    var wateringDates = new Array();

    var startDate = new Date();
    var nextMonday = 0;

    for (var i = 0; i < plants.length; i++) {
        //Extract the watering interval from the JSON
        var waterIndex = plants[i].water_after.indexOf(" ");
        var waterAfter = Number(plants[i].water_after.substring(0, waterIndex));

        //Calculate the number of days this plant will need
        var numberOfDays = 84 / waterAfter;

        //Start from the Monday after today
        var day = startDate.getDay();

        if (day == 0) { //If today is Sunday
          //Increment the current date by 1
          nextMonday = 1;
        }
        else {
          //Increment the current date by the number of days between today and next Monday
          nextMonday = 8 - day
        }

        startDate.setDate(startDate.getDate() + nextMonday);

        //Calculate the dates this plant will need to be watered
        var plantDates = new Array();
        
        for (var j = 0; j < numberOfDays; j++) {
            plantDates.push(startDate.toLocaleDateString('en-US', {day: 'numeric', month: 'long', year: 'numeric'}) + " ");
            startDate.setDate(startDate.getDate() + waterAfter);
        }

        wateringDates.push({plantName: plants[i].name, dates: plantDates});
    }
    
    return (
      <div className="App">
        <h1>Tandem Plant Watering Schedule</h1>
        <Schedule plants={plants} wateringDates={wateringDates} />
      </div>
    );
  }
}

export default App;
