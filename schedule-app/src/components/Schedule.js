import React, {Component} from 'react';

class Schedule extends Component {

    render(){

        const plants = this.props.plants;
        const schedule = this.props.wateringDates;

        return(
            <div>
            {plants.map((plant, index) =>{
                return <h2>Water the {plant.name} every {plant.water_after}</h2>
            })}
            {schedule.map((schedule, index) =>{
                return <h2>Water the {schedule.plantName} on {schedule.dates}</h2>
            })}
            </div>
            
        );
    }
}

export default Schedule;