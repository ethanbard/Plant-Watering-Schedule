import React, {Component} from 'react';

class WateringDate extends Component {

    render() {

        const date = this.props.wateringDate;
        const plants = this.props.plants;
    
        var plantNames = [];

        //For each plant, check if this component's date is in the plant's date array
        for (var i = 0; i < plants.length; i++) {
            if (plants[i].dates.indexOf(date.toDateString()) !== -1) {
                plantNames.push(plants[i].plantName);
            }
        }
        
        return (
            <div className="grid-item">
                <h3>{date.toDateString()}</h3>
                {plantNames.map((name) =>{
                    return <h4>{name}</h4>
                })}
                <br />
            </div>
        );
    }

}

export default WateringDate;