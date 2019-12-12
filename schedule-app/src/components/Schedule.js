import React, {Component} from 'react';
import WateringDate from './WateringDate';

class Schedule extends Component {

    render(){

        const plants = this.props.plants;
        const wateringDates = this.props.wateringDates;
        const startDate = this.props.startDate;

        var schedule = [];

        //Create the schedule array
        for (var i = 0; i < 84; i++) {
            var newDate = new Date(startDate);
            newDate.setDate(newDate.getDate() + i);
            if ((newDate.getDay() % 6 !== 0) && (newDate.getDay() % 7 !== 0)) {
                schedule.push({date: newDate, plants: []});
            }
        }

        for (var i = 0; i < plants.length; i++) {
            //Extract the watering interval from the JSON
            var waterIndex = plants[i].water_after.indexOf(" ");
            var waterAfter = Number(plants[i].water_after.substring(0, waterIndex));
            
            //Add this plant to the schedule
            for (var j = 0; j < schedule.length; j++) {
                //If the current schedule object is a multiple of waterAfter, add the plant name
                if (j % waterAfter == 0) {
                    schedule[j].plants.push(plants[i].name);
                }
            }
        }

        return(
            <div>
            {plants.map((plant) =>{
                return <h2>Water the {plant.name} every {plant.water_after}</h2>
            })}
            <br />
            {schedule.map((schedule) =>{
                return <WateringDate wateringDate={schedule.date} plants={wateringDates} />
            })}
            </div>
        );
    }
}

export default Schedule;