import React, {Component} from 'react';
import PostData from '../data/Apprentice_WeGrowInTandem_Data.json';

class Schedule extends Component {

    render(){

        let plants = PostData;

        return(
            <div>
            {plants.map((plant, index) =>{
                return <h2>Water {plant.name} every {plant.water_after}</h2>
            })}
            </div>
            
        );
    }
}

export default Schedule;