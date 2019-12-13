import React, {Component} from 'react';
import WateringDate from './WateringDate';

class Schedule extends Component {

    render(){

        const plants = this.props.plants;

        var schedule = [];

        var startDate = new Date();
        var nextMonday = 0;

        //Start from the Monday after today
        var day = startDate.getDay();

        if (day === 0) { //If today is Sunday
          //Increment the current date by 1
          nextMonday = 1;
        }
        else {
          //Increment the current date by the number of days between today and next Monday
          nextMonday = 8 - day
        }

        startDate.setDate(startDate.getDate() + nextMonday);

        //Create the schedule array
        for (var i = 0; i < 84; i++) {
            var newDate = new Date(startDate);
            newDate.setDate(newDate.getDate() + i);
            if ((newDate.getDay() % 6 !== 0) && (newDate.getDay() % 7 !== 0)) {
                schedule.push({date: newDate, plants: []});
            }
        }

        //Watering dates array
        var wateringDates = [];

        for (var i = 0; i < plants.length; i++) {
            //Extract the watering interval from the JSON
            var waterIndex = plants[i].water_after.indexOf(" ");
            var waterAfter = Number(plants[i].water_after.substring(0, waterIndex));

            //Calculate the number of days this plant will need
            var numberOfDays = 84 / waterAfter;

            //Calculate the dates this plant will need to be watered
            var plantDates = [];

            var newDate = new Date(startDate.toDateString());
            
            for (var j = 0; j < numberOfDays; j++) {
            if (newDate.getDay() === 6) {
                //If the current day is Saturday, skip ahead two days
                newDate.setDate(newDate.getDate() + 2);
            } else if (newDate.getDay() === 0) {
                //If the current day is Sunday, skip ahead one day
                newDate.setDate(newDate.getDate() + 1);
            }
            //Add the date to the plantDates array and move the new date ahead according to the plant schedule
            plantDates.push(newDate.toDateString());
            newDate.setDate(newDate.getDate() + waterAfter);
            }

            wateringDates.push({plantName: plants[i].name, dates: plantDates});
        }

        return(
            <div className="grid-container">
            {schedule.map((schedule) =>{
                return <WateringDate wateringDate={schedule.date} plants={wateringDates} />
            })}
            </div>
        );
    }
}

export default Schedule;